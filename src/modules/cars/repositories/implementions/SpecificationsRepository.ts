import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ISpecificationsRepository, ICreateSpecificationsRepositoryDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

    private repository: Repository<Specification>;

    constructor(){
        //this.repository = getRepository(Specification);
    }

   async create({ name, description }: ICreateSpecificationsRepositoryDTO): Promise<void> {
        this.repository = getRepository(Specification);
       const specification = this.repository.create({
            name, 
            description,
        })

        await this.repository.save(specification);
    }
   async findByName(name: string): Promise<Specification>{
        const specification = await this.repository.findOne({ name });

         return specification;
     }

}

export { SpecificationsRepository } ;