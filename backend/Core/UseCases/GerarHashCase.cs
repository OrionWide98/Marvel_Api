using System;
using System.Security.Cryptography;
using System.Text;
using Core.Interfaces;

namespace Core.UseCases
{
    public class GerarHashCase : IGerarHashCase
    {
         public string GerarHash(string ts, string privateKey, string publicKey)
        {
            
            byte[] bytes =
                    Encoding.UTF8.GetBytes(ts + privateKey + publicKey);
            var gerador = MD5.Create();
            byte[] bytesHash = gerador.ComputeHash(bytes);
            return BitConverter.ToString(bytesHash)
                .ToLower().Replace("-", String.Empty);
        }
    }
}