// Namespaces em Multiplos Arquivos

namespace Geometria {
    export namespace Area {
        const PI = 3.14;
    
        export function circuferencia(raio: number) {
            return PI * Math.pow(raio, 2)
        }
    }
}