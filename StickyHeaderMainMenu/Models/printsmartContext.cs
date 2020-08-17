using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace StickyHeaderMainMenu.Models
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

        public virtual DbSet<Secqmaster> Secqmaster { get; set; }
        public virtual DbSet<Useraddress> Useraddress { get; set; }
        public virtual DbSet<Userdetail> Userdetail { get; set; }

        public virtual DbSet<Dimmaster> Dimmaster { get; set; }
        public virtual DbSet<Orderdetail> Orderdetail { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Product> Product { get; set; }
        public virtual DbSet<Productmodel> Productmodel { get; set; }
        public virtual DbSet<Statusmaster> Statusmaster { get; set; }
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

            modelBuilder.Entity<Secqmaster>(entity =>
            {
                entity.HasKey(e => e.SecQid)
                    .HasName("PRIMARY");

                entity.ToTable("secqmaster");

                entity.Property(e => e.SecQid)
                    .HasColumnName("SecQId")
                    .ValueGeneratedOnAdd();

                entity.Property(e => e.SecQ)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Useraddress>(entity =>
            {
                entity.HasKey(e => e.AddrId)
                    .HasName("PRIMARY");

                entity.ToTable("useraddress");

                entity.HasIndex(e => e.UserId)
                    .HasName("FK_UserId");

                entity.Property(e => e.AddrId)
                    .HasColumnName("AddrID")
                    .HasColumnType("mediumint");

                entity.Property(e => e.AddressLine1)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine2)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine3)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine4)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.AddressLine5)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ContactNo)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.IsDefault).HasColumnType("tinyint(1)");

                entity.Property(e => e.Name)
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.PinCode).HasColumnType("mediumint");

                entity.Property(e => e.UserId).HasColumnType("mediumint");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Useraddress)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_UserId");
            });

            modelBuilder.Entity<Userdetail>(entity =>
            {
                entity.HasKey(e => e.UserId)
                    .HasName("PRIMARY");

                entity.ToTable("userdetail");

                entity.HasIndex(e => e.SecQid)
                    .HasName("FK_SecQId");

                entity.Property(e => e.UserId).HasColumnType("mediumint");

                entity.Property(e => e.Dob)
                    .HasColumnName("DOB")
                    .HasColumnType("date");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Email)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Isactive).HasColumnType("tinyint(1)");

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Pwd).HasColumnType("blob");

                entity.Property(e => e.SecQa)
                    .HasColumnName("SecQA")
                    .HasColumnType("blob");

                entity.Property(e => e.SecQid).HasColumnName("SecQId");

                entity.Property(e => e.Telephone)
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.HasOne(d => d.SecQ)
                    .WithMany(p => p.Userdetail)
                    .HasForeignKey(d => d.SecQid)
                    .HasConstraintName("FK_SecQId");
            });

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

                entity.HasIndex(e => e.DimIdSize)
                    .HasName("FK_DimIdSize_OrderDetail");

                entity.HasIndex(e => e.ProdId)
                    .HasName("FK_ProdId_OrderDetail");

                entity.HasIndex(e => e.ProdModelId)
                    .HasName("FK_ProdModelId_OrderDetail");

                entity.HasIndex(e => e.StatusCode)
                    .HasName("FK_StatusCode_OrderDetail");

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.Gender)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.Property(e => e.IsCustomized).HasColumnType("tinyint(1)");

                entity.Property(e => e.OrderedBy).HasColumnType("mediumint");

                entity.Property(e => e.StatusCode)
                    .HasMaxLength(1)
                    .IsFixedLength();

                entity.HasOne(d => d.DimIdSizeNavigation)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.DimIdSize)
                    .HasConstraintName("FK_DimIdSize_OrderDetail");

                entity.HasOne(d => d.Prod)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.ProdId)
                    .HasConstraintName("FK_ProdId_OrderDetail");

                entity.HasOne(d => d.ProdModel)
                    .WithMany(p => p.Orderdetail)
                    .HasForeignKey(d => d.ProdModelId)
                    .HasConstraintName("FK_ProdModelId_OrderDetail");

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

                entity.Property(e => e.DtCreate).HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.OrderedBy).HasColumnType("mediumint");
            });

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
            });


            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
