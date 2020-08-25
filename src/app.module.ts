import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [CoffeesModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: false,
      typePaths: ["./src/schema.graphql"],
      definitions: {
        path: `${
          process.env.ENVIRONMENT === "dev"
            ? "./src/infrastructure/graphql/"
            : "/tmp/"
        }portal-events.ts`,
        outputAs: "class",
      },
      introspection: true,
    }),
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admindb",
    password: "6I20gNv3RMgT",
    database: "dev-v3-od-552-app",
    autoLoadEntities: true,
    synchronize: false, // should be disable in production

  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
