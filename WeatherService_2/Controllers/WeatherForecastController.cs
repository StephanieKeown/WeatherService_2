using System;
using System.Threading.Tasks;
using AutoMapper;
using DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Configuration;
using RestClient;
using WeatherService_2.Models;

namespace StephAuthREact.Controllers
{
    [ApiController]
    [Route("[controller]")] 
    public class WeatherForecastController : Controller
    {
        private readonly IWeatherClient _weatherClient;
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;

        public WeatherForecastController(IWeatherClient weatherClient, IConfiguration config, IMapper mapper)
        {
            _weatherClient = weatherClient;
            _config = config;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var weatherDto = await _weatherClient.GetWeatherForecast("https://metaweather.com/location/api/44544");

            WeatherForecastModel model = new WeatherForecastModel();
            try
            {
                model = _mapper.Map<WeatherForecastDto, WeatherForecastModel>(weatherDto);
            }
            catch(Exception ex)
            {
                ex.ToString();
            }


            return View(model);
        }

        //[HttpGet]
        //public async Task<JsonResult> Get()
        //{

        //    var weather = await _weatherClient.GetWeatherForecast("https://metaweather.com/location/api/44544");

        //    return Json(weather);
        //}
    }
}
