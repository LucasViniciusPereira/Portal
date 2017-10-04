import { Exception } from './../class/exception-validation';
import { MzToastService } from 'ng2-materialize';
import { HelperMessage } from '../class/helper-message';
import { Enumerations } from '../enumerators/enumerations';

/** @description Decorator Validation custom: Serve para capturar as validaçoes da aplicação, evitando usar o {try; cath;}
 * @param {Object} target Protótipo da classe que possui o método.
 * @param {string} propertyKey Nome do método em que estamos aplicando o decorator. Pode ser um string ou um Symbol
 * @param {TypedPropertyDescriptor} descriptor Uma instância da insterface TypedPropertyDescriptor
 * @return {TypedPropertyDescriptor}
 */
export function FilterException(
  target: Object,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<any>
) {

  // salvando uma referência para o método original
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    try {
      const result = originalMethod.apply(this, args);

      if (result && <Exception.BusinessValidation>result) {
        return new HelperMessage(new MzToastService())
              .showMessage(Enumerations.eTypeMessage.ERROR, result.validations);
      }

      if (result) {
        return result;
      }
    } catch (e) {
      return new HelperMessage(new MzToastService())
        .showMessage(Enumerations.eTypeMessage.WARNING, [`Erro na aplicação: ${e.message}`]);
    }
  };
  return descriptor;
}
