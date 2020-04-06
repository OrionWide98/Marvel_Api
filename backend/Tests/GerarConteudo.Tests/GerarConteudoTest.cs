using System.Runtime.CompilerServices;
using System.Data;
using System.Diagnostics;
using System;
using Xunit;
using Core.UseCases;
using Moq;

namespace GerarConteudo.Tests
{
    public class GerarConteudo
    {

        [Fact]
        public void VerificarNull()
        {
            var _mock = new Mock<GerarConteudoCase>().Object;

            var result = _mock.GerarConteudo(DateTime.Now.ToString(), "2ffd4a04521f09592580661db127cdb7", "a838b1284c6b05ceb14271499c355c3d", "Hulk");
             var ts = DateTime.Now.ToString();
            Assert.Null(ts);
            
        }
    }
}
