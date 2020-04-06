using System.Collections;
using System;
using Api.Gateway;
using Core.Entities;
using Core.Interfaces;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;


namespace Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PostApiToDatabase : Controller
    {
        private readonly MarvelApiContext _marvelapicontext;
        private readonly PostApiToDatabaseGateway _gateway;

        public PostApiToDatabase(MarvelApiContext marvelApiContext,
            PostApiToDatabaseGateway gateway)
        {
            _marvelapicontext = marvelApiContext;
            _gateway = gateway;
        }

        [HttpGet]
        public ActionResult GetPersonagem(
            [FromQuery (Name = "nome")] string nome)
        {
            var resultado = _gateway.GerarJson(nome);
           
            ArrayList personagens = new ArrayList();
                
            foreach (var result in resultado.data.results)
            {
                Personagem personagem = new Personagem();

                personagem.Nome = result.name;
                personagem.Descricao = result.description;
                personagem.UrlImagem = result.thumbnail.path + "." +
                  result.thumbnail.extension;
                personagem.UrlWiki = result.urls[1].url;

                _marvelapicontext.Personagens.Add(personagem);
                personagens.Add(personagem);
            }

            _marvelapicontext.SaveChanges();
            return Ok(personagens);
        }
    }
    }
