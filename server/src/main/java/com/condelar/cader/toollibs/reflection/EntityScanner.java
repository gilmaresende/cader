package com.condelar.cader.toollibs.reflection;

import com.condelar.cader.report.dto.TypeSearch;

import java.io.File;
import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

public class EntityScanner {

    public List<Class<?>> scanEntities2() {
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

    public static List<TypeSearch> scanEntities3() {
        String basePackage = "com.condelar.cader.app.entiti";
        List<TypeSearch> typeSearches = new ArrayList<>();

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

                                Type[] interfaces = clazz.getInterfaces();

                                for (Type inte : interfaces) {
                                    if (inte.toString().equals("interface com.condelar.cader.core.structure.RegisterEntity")) {
                                        TypeSearch t = new TypeSearch();
                                        t.setName(clazz.getSimpleName());
                                        t.setPathClass(clazz.getName());
                                        typeSearches.add(t);
                                    }
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

        return typeSearches;
    }

}
