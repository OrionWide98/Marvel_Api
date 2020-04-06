using System.Diagnostics;
using System.Reflection;
using System.Xml.Schema;
using System.Net.Mime;
using System;
using Xunit;
using Api.Gateway;
using Microsoft.Extensions.Configuration;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;


namespace PostApiToDatabaseGatewayTest
{
    public class GatewayTest
    {
        // private readonly IGerarConteudoCase _gerarConteudoCase;
        // private readonly IGerarHashCase _gerarHashCase;
        // private readonly IConfiguration _config; 

        // public GatewayTest(IGerarConteudoCase gerarConteudoCase,
        //     IGerarHashCase gerarHashCase,[FromServices] IConfiguration config)
        // {
        //     _gerarConteudoCase = gerarConteudoCase;
        //     _gerarHashCase = gerarHashCase;
        //     _config = config;

        // } 


        // [Fact]
        // public void GerarJsonTest()
        // {

        //    PostApiToDatabaseGateway Json = new PostApiToDatabaseGateway(_config,
        //          _gerarConteudoCase, _gerarHashCase);
        //    string name = "Hulk";
        //    var personagem = Json.GerarJson(name);
        //    var personagemNome = personagem.data.results[0].name;
        //    Assert.Equals(personagemNome, name);
        // }
    }
}
