using Core.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data
{
    public class MarvelApiContext : DbContext
    {
        public MarvelApiContext (DbContextOptions<MarvelApiContext> options) : base (options) { }
        
        public virtual DbSet<Personagem> Personagens { get; set; }
    }   
}