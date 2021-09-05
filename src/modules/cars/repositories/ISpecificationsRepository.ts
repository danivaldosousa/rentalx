import { Specification } from "../entities/Specification";

interface ICreateSpecificationsRepositoryDTO{
    name:string;
    description:string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationsRepositoryDTO) : Promise<void>;
    findByName(name:string) : Promise<Specification>;
  

}

export { ISpecificationsRepository, ICreateSpecificationsRepositoryDTO };