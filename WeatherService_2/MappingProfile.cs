using AutoMapper;
using DTO;
using WeatherService_2.Models;

namespace WeatherService_2
{
    public class MappingProfile : Profile
    {
            public MappingProfile()
            {
                // Add as many of these lines as you need to map your objects
                CreateMap<WeatherForecastModel, WeatherForecastDto>().ReverseMap();
                CreateMap<FiveDayForecastModel, FiveDayForecastDto>().ReverseMap();
                CreateMap<SourceModel, SourceDto>().ReverseMap();
                CreateMap<ParentModel, ParentDto>().ReverseMap();
        }
    }
    
}
