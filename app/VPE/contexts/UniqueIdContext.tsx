import  {useContext, useRef, createContext, type ReactNode} from 'react';

import { useLazyRef } from '@shopify/react-hooks';
import { name as projectName } from '@VPE/config/project';




type IdGenerator = () => string;

class ScopedIdFactory {
  private idGenerators: Record<string, IdGenerator>;
  private idGeneratorFactory: (scope: string) => IdGenerator;

  constructor(factory: (scope: string) => IdGenerator) {
    this.idGenerators = {};
    this.idGeneratorFactory = factory;
  }

  nextId(scope: string): string {
    return (
      this.idGenerators[scope] ||
      (this.idGenerators[scope] = this.idGeneratorFactory(scope))
    )(),
    this.idGenerators[scope]();
  }
}


function createScopedIdGenerator(scope: string = ""): () => string {
  let counter = 1;
  return () => `${projectName}${scope}${counter++}`;
}



type UniqueIdFactory = InstanceType<typeof ScopedIdFactory>;


const UniqueIdContext = createContext<UniqueIdFactory | null>(null);




export function UniqueIdProvider({ children }: { children: ReactNode }) {


    const ref = useLazyRef(() => new ScopedIdFactory(createScopedIdGenerator));
    return (
            <UniqueIdContext.Provider value={ref.current}>
              {children}
            </UniqueIdContext.Provider>
    )
}




export function useUniqueId(prefix: string = "", explicitId: string = ""): string {
  const factory = useContext(UniqueIdContext);
  const idRef = useRef<string | null>(null);

  if (!factory) {
    throw new Error("No UniqueIdFactory was provided.");
  }

  if (explicitId) {
    return explicitId;
  }

  if (!idRef.current) {
    idRef.current = factory.nextId(prefix);
  }

  return idRef.current;
}

