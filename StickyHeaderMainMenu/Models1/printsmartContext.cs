using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StickyHeaderMainMenu.Models1
{
    public partial class printsmartContext : DbContext
    {
        public printsmartContext()
        {
        }

        public printsmartContext(DbContextOptions<printsmartContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Productmaterial> Productmaterial { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=devansh@14;database=printsmart");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProdId)
                    .HasName("PRIMARY");

                entity.ToTable("product");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.Property(e => e.IsHeader).HasColumnType("tinyint(1)");

                entity.Property(e => e.ProdDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RouterLink)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Productmaterial>(entity =>
            {
                entity.HasKey(e => e.MatId)
                    .HasName("PRIMARY");

                entity.ToTable("productmaterial");

                entity.HasIndex(e => e.ProdId)
                    .HasName("FK_ProdID_ProductMaterial");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.Property(e => e.MatDescription)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.Productmaterial)
                    .HasForeignKey(d => d.ProdId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdID_ProductMaterial");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
