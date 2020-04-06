using System.Reflection.PortableExecutable;
using System.Diagnostics;
using System;
using Xunit;
using Moq;
using Core.UseCases;

namespace GerarHash.Tests
{
    
    public class VerificarHash
    {

        //private Mock<IGerarHashCase> _mock;
        
        [Fact]
        public void VerificarNull()
        {   
            var _mock = new Mock<GerarHashCase>().Object;
            //string result = "teste";
            // _mock.SetupAllProperties();
            // _mock.Setup(x => x.GerarHash(DateTime.Now.ToString(), "privatekey", "publickey"));
            var result = _mock.GerarHash(DateTime.Now.ToString(), "7808f94a840f87a135e83fced59638cfcb616515", "2ffd4a04521f09592580661db127cdb7");
            Assert.Null(result);
        }
    }
}