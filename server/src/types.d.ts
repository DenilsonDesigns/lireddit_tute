import { EntityManager } from "@mikro-orm/knex";

export type MyContext = {
  em: EntityManager<IDatabaseDriver<Connection>>;
};
