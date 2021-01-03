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

        public virtual DbSet<Dimmaster> Dimmaster { get; set; }
        public virtual DbSet<Orderdetail> Orderdetail { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Productmodel> Productmodel { get; set; }
        public virtual DbSet<Statusmaster> Statusmaster { get; set; }

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
            modelBuilder.Entity<Dimmaster>(entity =>
            {
                entity.HasKey(e => e.DimId)
                    .HasName("PRIMARY");

                entity.ToTable("dimmaster");

                entity.HasIndex(e => e.ProdId)
                    .HasName("FK_ProdId_DimMaster");

                entity.HasIndex(e => e.ProdModelId)
                    .HasName("FK_ProdModelId_DimMaster");

                entity.Property(e => e.DimDescription)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.Dimmaster)
                    .HasForeignKey(d => d.ProdId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdId_DimMaster");

                entity.HasOne(d => d.ProdModel)
                    .WithMany(p => p.Dimmaster)
                    .HasForeignKey(d => d.ProdModelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdModelId_DimMaster");
            });

            modelBuilder.Entity<Orderdetail>(entity =>
            {
                entity.HasKey(e => e.DetailId)
                    .HasName("PRIMARY");

                entity.ToTable("orderdetail");

                entity.HasIndex(e => e.DimIdsize)
                    .HasName("FK_DimIDSize_OrderDetail");

                entity.HasIndex(e => e.ModelId)
                    .HasName("FK_ModelID_OrderDetail");

                entity.HasIndex(e => e.StatusCode)
                    .HasName("FK_StatusCode_OrderDetail");

                entity.Property(e => e.DetailId).HasColumnName("DetailID");

                entity.Property(e => e.DimIdsize).HasColumnName("DimIDSize");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.IsCustomized).HasColumnType("tinyint(1)");

                entity.Property(e => e.ModelId).HasColumnName("ModelID");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.OrderedBy).HasColumnType("mediumint");

                entity.Property(e => e.StatusCode)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.HasOne(d => d.DimIdsizeNavigation)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.DimIdsize)
                    .HasConstraintName("FK_DimIDSize_OrderDetail");

                entity.HasOne(d => d.Model)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.ModelId)
                    .HasConstraintName("FK_ModelID_OrderDetail");

                entity.HasOne(d => d.StatusCodeNavigation)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.StatusCode)
                    .HasConstraintName("FK_StatusCode_OrderDetail");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PRIMARY");

                entity.ToTable("orders");

                entity.Property(e => e.OrderId).HasColumnName("OrderID");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.OrderedBy).HasColumnType("mediumint");

                entity.Property(e => e.TotMrpamount).HasColumnName("TotMRPAmount");
            });

            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.ProdId)
                    .HasName("PRIMARY");

                entity.ToTable("product");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.Property(e => e.IsHeader).HasColumnType("tinyint(1)");

                entity.Property(e => e.ModelFolder)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ProdDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RouterLink)
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Productmodel>(entity =>
            {
                entity.HasKey(e => e.ModelId)
                    .HasName("PRIMARY");

                entity.ToTable("productmodel");

                entity.HasIndex(e => e.ProdId)
                    .HasName("FK_ProdId_ProductModel");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.Property(e => e.ModelCode)
                    .HasMaxLength(2)
                    .IsUnicode(false);

                entity.Property(e => e.ModelDesc)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.ModelFolder)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.ModelLink)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.Productmodel)
                    .HasForeignKey(d => d.ProdId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ProdId_ProductModel");
            });

            modelBuilder.Entity<Statusmaster>(entity =>
            {
                entity.HasKey(e => e.StatusCode)
                    .HasName("PRIMARY");

                entity.ToTable("statusmaster");

                entity.Property(e => e.StatusCode)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.IsActive).HasColumnType("tinyint(1)");

                entity.Property(e => e.StatusDescription)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
