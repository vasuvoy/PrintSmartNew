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

        public virtual DbSet<VwGetproductlist> VwGetproductlist { get; set; }

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
            modelBuilder.Entity<VwGetproductlist>(entity =>
            {
                entity.HasNoKey();

                entity.ToView("vw_getproductlist");

                entity.Property(e => e.L1parentId).HasColumnName("L1ParentId");

                entity.Property(e => e.L1prodDesc)
                    .HasColumnName("L1ProdDesc")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.L2isHeader)
                    .HasColumnName("L2IsHeader")
                    .HasColumnType("tinyint(1)");

                entity.Property(e => e.L2parentId).HasColumnName("L2ParentId");

                entity.Property(e => e.L2prodDesc)
                    .HasColumnName("L2ProdDesc")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.L2prodId)
                    .HasColumnName("L2ProdId")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.L3parentId).HasColumnName("L3ParentId");

                entity.Property(e => e.L3prodDesc)
                    .HasColumnName("L3ProdDesc")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.L3prodId)
                    .HasColumnName("L3ProdId")
                    .HasDefaultValueSql("'0'");

                entity.Property(e => e.RouterLink)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
