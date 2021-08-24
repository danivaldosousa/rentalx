import { ISpecificationsRepository } from "../../repositories/ISpecificationsRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationUseCase{

    constructor(private specificationRepository: ISpecificationsRepository){}

    execute({ description, name}: IRequest): void {

        const specificationAlredyExists = this.specificationRepository.findByName(name);

        if(specificationAlredyExists){
            throw new Error("Specification already exists");
        }
        
        this.specificationRepository.create({
            description, 
            name,
        });
    }

}

export { CreateSpecificationUseCase };