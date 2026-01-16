package com.cafeteria.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String corsOrigins = System.getenv("CORS_ORIGINS");
        if (corsOrigins == null) {
            corsOrigins = "http://localhost:3000";
        }
        
        registry.addMapping("/**")
                .allowedOriginPatterns(corsOrigins.split(","))
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
