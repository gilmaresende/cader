package com.condelar.cader.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Value("${cors.originPattenrs:default}")
    private String corsOriginPattenrs = "";

    @Value("${cors.habilitarCors:default}")
    private boolean habilitarCors = false;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String[] allwedOrigins = corsOriginPattenrs.split(",");
        if (habilitarCors) {
            registry.addMapping("/**")
                    // .allowedMethods("GET","POST","PUT");

                    .allowedMethods("*").allowedOrigins(allwedOrigins).allowCredentials(true);
        }
        //Origin
    }
}
