package com.condelar.cader.toollibs.reflection;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Field;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class EntityScanner {

    public List<Class<?>> scanEntities() {
        String basePackage = "com.condelar.cader.app.entiti";
        List<Class<?>> entityClasses = new ArrayList<>();

        try {
            ClassLoader classLoader = Thread.currentThread().getContextClassLoader();
            String path = basePackage.replace('.', '/');
            Enumeration<URL> resources = classLoader.getResources(path);

            while (resources.hasMoreElements()) {
                URL resource = resources.nextElement();
                File directory = new File(resource.getFile());

                if (directory.exists()) {
                    File[] files = directory.listFiles(file -> file.getName().endsWith(".class"));

                    if (files != null) {
                        for (File file : files) {
                            String className = basePackage + '.' + file.getName().replace(".class", "");

                            try {
                                Class<?> clazz = Class.forName(className);

                                Field[] campos = clazz.getDeclaredFields();
                                System.out.println("#####################################: ");
                                System.out.println(className);
                                // Exibe os nomes dos atributos
                                for (Field campo : campos) {
                                    System.out.println("-------------------------------------: ");
                                    System.out.println("Nome: " + campo.getName());
                                    Class<?> tipo = campo.getType();
                                    System.out.println("Tipo: " + tipo.getName());
                                }

                                if (clazz.isAnnotationPresent(jakarta.persistence.Entity.class)) {
                                    entityClasses.add(clazz);
                                }
                            } catch (ClassNotFoundException e) {
                                e.printStackTrace(); // Handle appropriately
                            }
                        }
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace(); // Handle appropriately
        }

        return entityClasses;
    }
}
