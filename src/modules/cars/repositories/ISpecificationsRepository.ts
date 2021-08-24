import { Specification } from "../model/Specification";

interface ICreateSpecificationsRepositoryDTO{
    name:string;
    description:string;
}

interface ISpecificationsRepository {
    create({ name, description }: ICreateSpecificationsRepositoryDTO) : void;
    findByName(name:string) : Specification;
  

}

export { ISpecificationsRepository, ICreateSpecificationsRepositoryDTO };