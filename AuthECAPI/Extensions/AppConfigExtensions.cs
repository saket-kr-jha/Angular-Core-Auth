using AuthECAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AuthECAPI.Extensions
{
    public static class AppConfigExtensions
    {
        public static WebApplication ConfigureCORS(this WebApplication app, IConfiguration config)
        {
            app.UseCors(options =>
                options.WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod());
            return app;
        }
        public static IServiceCollection AddAppConfig(this IServiceCollection services, IConfiguration config)
        {
           
                   services.Configure<AppSettings>(config.GetSection("AppSettings"));
            return services;
        }
    }
}
