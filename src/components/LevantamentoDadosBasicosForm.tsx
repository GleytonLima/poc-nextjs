import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { pt } from 'yup-locale-pt';
import BrButton from './br-design-system/BrButton';
import BrDateRangePicker from './br-design-system/BrDateRangePicker';
import BrInput from './br-design-system/BrInput';
import BrSelect from './br-design-system/BrSelect';

Yup.setLocale(pt);

export interface LevantamentoDadosBasicosFormProps {}

const LevantamentoDadosBasicosForm = (props: LevantamentoDadosBasicosFormProps) => {
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
            <span>Erros do formulário: {JSON.stringify(errors)}</span>
            <span>Formulário válido: {JSON.stringify(isValid)}</span>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div className="row">
                    <div className="col-sm-6">
                        <Controller
                            name="ano"
                            control={control}
                            render={({ field }) => (
                                <BrSelect
                                    id="ano"
                                    name="ano"
                                    label="Ano"
                                    required={true}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="Selecione um ano"
                                    errorMessage={errors.ano?.message}
                                    itens={[
                                        { text: '2023', value: '2023' },
                                        { text: '2024', value: '2024' },
                                        { text: '2025', value: '2025' },
                                    ]}
                                />
                            )}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Controller
                            name="periodo"
                            control={control}
                            render={({ field }) => (
                                <BrDateRangePicker
                                    id="periodo"
                                    name="periodo"
                                    label="Selecione o Período"
                                    disabled={!watch('ano')}
                                    required={true}
                                    onBlur={(date: Date) => {
                                        field.onChange(date);
                                        field.onBlur();
                                    }}
                                    onChange={field.onChange}
                                    errorMessage={errors.periodo?.message}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Controller
                            name="estado"
                            control={control}
                            render={({ field }) => (
                                <BrSelect
                                    id="estado"
                                    name="estado"
                                    label="Estado"
                                    required={true}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    placeholder="Selecione um estado"
                                    itens={[
                                        { text: 'Acre', value: 'AC' },
                                        { text: 'Amazonas', value: 'AM' },
                                    ]}
                                />
                            )}
                        />
                    </div>

                    <div className="col-sm-6">
                        <Controller
                            name="municipio"
                            control={control}
                            render={({ field }) => (
                                <BrSelect
                                    id="municipio"
                                    name="municipio"
                                    label="Munícipio"
                                    required={true}
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    disabled={!watch('estado')}
                                    placeholder="Selecione um município"
                                    itens={[
                                        { text: 'Itapiranga', value: 'Itapiranga' },
                                        { text: 'Manaus', value: 'Manaus' },
                                    ]}
                                />
                            )}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <Controller
                            name="quantidadeImoveis"
                            control={control}
                            render={({ field }) => (
                                <BrInput
                                    type="number"
                                    label="Quantidade de imóveis"
                                    id="quantidadeImoveis"
                                    onBlur={field.onBlur}
                                    onChange={field.onChange}
                                    required={true}
                                    placeholder="Quantidade de imóveis"
                                    name="quantidadeImoveis"
                                    errorMessage={errors.quantidadeImoveis?.message}
                                />
                            )}
                        />
                    </div>
                </div>

                <BrButton type="submit" enfase="primary" texto="Criar Levantamento" />
            </form>
        </div>
    );
};
export default LevantamentoDadosBasicosForm;
