using System;
using System.Net.Http;
using System.Net.Http.Headers;
using Core.Interfaces;

namespace Core.UseCases
{
    public class GerarConteudoCase : IGerarConteudoCase
    {
        public string GerarConteudo(string ts,string publicKey,string hash,string name)
        {
            using (var client = new HttpClient())
            {
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(
                    new MediaTypeWithQualityHeaderValue("application/json"));
                var baseURL = "http://gateway.marvel.com/v1/public/";

                HttpResponseMessage response = client.GetAsync($"{baseURL}characters?" +
                $"nameStartsWith={Uri.EscapeUriString(name)}" +
                $"&orderBy=name&limit=20&ts={ts}" +
                $"&apikey={publicKey}&hash={hash}").Result;

                string conteudo = response.Content.ReadAsStringAsync().Result;
                return conteudo;
            }
        }
    }
}