﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using RatingsPage.Data;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<RatingsPageContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("RatingsPageContext") ?? throw new InvalidOperationException("Connection string 'RatingsPageContext' not found.")));

// Add services to the container.
builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Ratings}/{action=Index}/{id?}");

app.Run();
