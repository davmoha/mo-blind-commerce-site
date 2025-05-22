
import { 
  Clock, 
  PercentIcon, 
  Settings, 
  UserCheck 
} from "lucide-react";

const Statistics = () => {
  return (
    <section className="py-20 bg-mo-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-mo-dark text-center mb-4">
          The Duck Hunter's Frustration, Solved
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="flex flex-col items-center text-center">
            <div className="bg-mo-teal/10 p-6 rounded-full mb-4">
              <PercentIcon className="w-10 h-10 text-mo-teal" />
            </div>
            <h3 className="text-4xl font-bold text-mo-dark mb-2">62%</h3>
            <p className="text-lg text-mo-gray">
              Of hunters report wasting time setting up traditional blinds correctly
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-mo-teal/10 p-6 rounded-full mb-4">
              <Clock className="w-10 h-10 text-mo-teal" />
            </div>
            <h3 className="text-4xl font-bold text-mo-dark mb-2">30min</h3>
            <p className="text-lg text-mo-gray">
              Average time spent on conventional blind assembly
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-mo-teal/10 p-6 rounded-full mb-4">
              <UserCheck className="w-10 h-10 text-mo-teal" />
            </div>
            <h3 className="text-4xl font-bold text-mo-dark mb-2">100%</h3>
            <p className="text-lg text-mo-gray">
              Personalization - adjust to your size & hunting requirements
            </p>
          </div>
        </div>
        
        <p className="mt-14 text-center text-mo-gray max-w-3xl mx-auto">
          When every minute of shooting light counts, Mo-Blind eliminates the frustration that popup blind setups are known for.
        </p>
      </div>
    </section>
  );
};

export default Statistics;
