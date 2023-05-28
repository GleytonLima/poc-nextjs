import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import LevantamentoDadosBasicosForm from './LevantamentoDadosBasicosForm';

Yup.setLocale(pt);

export interface LevantamentoFormProps {}

const LevantamentoForm = (props: LevantamentoFormProps) => {
    const validationSchema = Yup.object().shape({
        ano: Yup.string().required().typeError('Precisa ser um ano válido').label('Ano').min(4),
        quantidadeImoveis: Yup.number()
            .required()
            .typeError('Precisa ser um valor numérico')
            .label('Quantidade de Imóveis')
            .positive()
            .min(1),
        estado: Yup.string().required().typeError('Precisa ser um estado válido').label('Estado').min(1),
        periodo: Yup.string()
            .test('ano-selecionado', 'Selecione primeiro o ano', function (value) {
                const { ano } = this.parent;
                return !!ano;
            })
            .test('periodo-valido', 'O período deve estar dentro do ano fornecido', function (value) {
                if (!value) {
                    return true;
                }
                const { ano } = this.parent;
                const periodRegex = /^(\d{2})\/(\d{2})\/(\d{4}) até (\d{2})\/(\d{2})\/(\d{4})$/;
                const matches = value.match(periodRegex);
                if (!matches) {
                    return false;
                }
                const [, startDay, startMonth, startYear, endDay, endMonth, endYear] = matches;
                const startDate = new Date(`${startYear}-${startMonth}-${startDay}`);
                const endDate = new Date(`${endYear}-${endMonth}-${endDay}`);
                const year = Number(ano);
                return startDate.getFullYear() === year && endDate.getFullYear() === year;
            }),
    });
    const { getValues, handleSubmit, formState, control, watch } = useForm({
        resolver: yupResolver(validationSchema),
        mode: 'onBlur',
    });
    const { errors, isValid } = formState;
    const onSubmit = async (event: any) => {
        console.log('submit', event);
    };
    const onError = async (error: any) => {
        console.log('onError', error);
    };

    return (
        <div style={{ margin: '25px' }}>
            <p className="h4 mt-5">Formulário Levantamento</p>
            <div className="br-tab">
                <nav className="tab-nav">
                    <ul>
                        <li className="tab-item active">
                            <button type="button" data-panel="panel-1">
                                <span className="name">Dados Básicos</span>
                            </button>
                        </li>
                        <li className="tab-item">
                            <button type="button" data-panel="panel-2">
                                <span className="name">Estratos</span>
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="tab-content">
                    <div className="tab-panel active" id="panel-1">
                        <LevantamentoDadosBasicosForm />
                    </div>
                    <div className="tab-panel" id="panel-2">
                        <p>Painel Todos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LevantamentoForm;
