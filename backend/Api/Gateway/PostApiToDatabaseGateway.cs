
using System;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Api.Gateway
{
    public class PostApiToDatabaseGateway
    {
        private readonly IConfiguration _config;
        private readonly IGerarHashCase _gerarHashCase;
        private readonly IGerarConteudoCase _gerarConteudoCase;

        public PostApiToDatabaseGateway([FromServices] IConfiguration config,
            IGerarConteudoCase gerarConteudoCase, IGerarHashCase gerarHashCase)
        {
            _config = config;
            _gerarConteudoCase = gerarConteudoCase;
            _gerarHashCase = gerarHashCase;
        }

         public dynamic GerarJson(string nome)
         {
            var publicKey = _config.GetSection("MarvelComicsAPI:PublicKey").Value;
            var privateKey = _config.GetSection("MarvelComicsAPI:PrivateKey").Value;
            string ts = DateTime.Now.ToString();

            var hash = _gerarHashCase.GerarHash(ts,privateKey,publicKey);
            var conteudo = _gerarConteudoCase.GerarConteudo(ts, publicKey, hash, nome);
            var json = JsonConvert.DeserializeObject(conteudo);

            return json;
         }
    }
}