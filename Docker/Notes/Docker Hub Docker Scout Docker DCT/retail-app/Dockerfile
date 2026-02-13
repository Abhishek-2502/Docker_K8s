FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/retail-app-0.0.1-SNAPSHOT.jar retail-app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "retail-app.jar"]
