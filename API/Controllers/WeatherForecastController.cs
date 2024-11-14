using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
#pragma warning disable IDE0300 // Simplify collection initialization
    private static readonly string[] Summaries = new[]
#pragma warning restore IDE0300 // Simplify collection initialization
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

#pragma warning disable IDE0052 // Remove unread private members
    private readonly ILogger<WeatherForecastController> _logger;
#pragma warning restore IDE0052 // Remove unread private members

    public WeatherForecastController(ILogger<WeatherForecastController> logger)
    {
        _logger = logger;
    } 

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
        return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        {
            Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            TemperatureC = Random.Shared.Next(-20, 55),
            Summary = Summaries[Random.Shared.Next(Summaries.Length)]
        })
        .ToArray();
    }
}
