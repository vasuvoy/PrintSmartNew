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

        public virtual DbSet<Secqmaster> Secqmaster { get; set; }
        public virtual DbSet<Useraddress> Useraddress { get; set; }
        public virtual DbSet<Userdetail> Userdetail { get; set; }

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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
