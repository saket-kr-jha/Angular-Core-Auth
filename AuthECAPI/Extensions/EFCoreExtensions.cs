﻿using AuthECAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthECAPI.Extensions
{
    public static class EFCoreExtensions
    {
        public static IServiceCollection InjectDBContext(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<AppDbContext>(options =>
                    options.UseSqlServer(config.GetConnectionString("DefaultConnection")));
            return services;
        }
    }
}
