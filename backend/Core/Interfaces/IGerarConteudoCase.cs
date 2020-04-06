namespace Core.Interfaces
{
    public interface IGerarConteudoCase
    {
        string GerarConteudo(string ts, string publicKey, string hash, string name);
    }
}