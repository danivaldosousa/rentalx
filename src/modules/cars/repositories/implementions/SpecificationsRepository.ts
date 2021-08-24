import { Specification } from "../../model/Specification";
import { ISpecificationsRepository, ICreateSpecificationsRepositoryDTO } from "../ISpecificationsRepository";


class SpecificationsRepository implements ISpecificationsRepository {

    private specifications: Specification[];

    private static INSTANCE = new SpecificationsRepository;

    constructor(){
        this.specifications =[];
    }

    public static getINSTANCE(): SpecificationsRepository{
            if(!SpecificationsRepository.INSTANCE){
                  SpecificationsRepository.INSTANCE = new SpecificationsRepository();  
            }

            return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationsRepositoryDTO): void {
        const specification = new Specification();

        Object.assign(specification, { 
            name, 
            description, 
            createdAt: new Date(),
         });

         this.specifications.push(specification);
    }
   findByName(name: string): Specification{
        const specification = this.specifications.find((specification) => specification.name === name);

         return specification;
     }

}

export { SpecificationsRepository } ;