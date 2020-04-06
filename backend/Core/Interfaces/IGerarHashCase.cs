namespace Core.Interfaces
{
    public interface IGerarHashCase
    {
         string GerarHash (string ts, string privateKey, string publicKey);
    }
}