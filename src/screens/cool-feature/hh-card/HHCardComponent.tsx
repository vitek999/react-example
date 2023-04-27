import React, {useEffect, useState} from "react";
import {Chart, PolarArea} from "react-chartjs-2";
import {
    ArcElement,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    RadialLinearScale,
    Title, Tooltip
} from 'chart.js';
import {CHART_COLORS, transparentize} from "./Utils";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip);

export const HHCardComponent: React.FC = () => {
    const [data, setData] = useState<FetchHHCardDTO | null>(null)

    useEffect(() => {
        const fetchJob = async () => {
            const fetchedData = await fetchHHCardData()
            setData(fetchedData);
        }
        fetchJob()
    })

    return data ? <HHCardComponentView data={data}/> : <></>
}

interface HHCardComponentViewProps {
    data: FetchHHCardDTO
}


const createData = (data: CriteriaDTO) =>  {
    const labels = ['Работоспособность прототипа', 'Соотвествие функциональным требованиям', 'Технологичность', 'Презентация', 'Потенциал'];
    return {
        labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: [data.workable, data.functionalRequirements, data.manufacturability, data.presentation, data.potential],
                backgroundColor: [
                    transparentize("#d92121", 0.3),
                    transparentize("#d92121", 0.3),
                    transparentize("#d92121", 0.3),
                    transparentize("#d92121", 0.3),
                    transparentize("#d92121", 0.3),
                ]
            }
        ]
    };
}

const HHCardComponentView: React.FC<HHCardComponentViewProps> = ({data}) => {
    const [chardData, setData] = useState<any>(null)
    useEffect(() => {
        setData(createData(data.criteria))
    }, [])

    return (
        <div style={{width: '450px', height: '165px', borderRadius: '4px', margin:'10px', boxShadow: '0 2px 12px 0 rgb(48 50 51 / 10%)', padding: '28px'}}>
            <div style={{width: '60%', height: '100%', float: 'left'}}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <img src={data.avatarUrl} style={{height: '50px', width: '50px', borderRadius: '50%'}}/>
                    <div style={{fontFamily: 'Arial,sans-serif', fontWeight:'400', fontSize: '24px', lineHeight: '1.16', marginLeft: '16px'}}>
                        {`${data.lastName} ${data.firstName[0]}. ${data.patronymic[0]}.`}
                    </div>
                </div>
                <div style={{fontFamily: 'Arial,sans-serif', fontWeight:'400', fontSize: '20px', lineHeight: '1.4', marginTop: '16px'}}>
                    Рейтинг: <span style={{fontFamily: 'Arial,sans-serif', fontWeight:'700', fontSize: '20px', lineHeight: '1.4'}}>{data.rating} из 10</span>
                </div>
            </div>
            <div style={{width: '40%', height: '100%', float: 'right'}}>
                { chardData && <PolarArea  data={chardData} height={'100px'} width={'100px'} /> }
            </div>
        </div>
    )
}

type CriteriaDTO = {
    workable: number;
    functionalRequirements: number;
    manufacturability: number;
    presentation: number;
    potential: number;
}

type FetchHHCardDTO = {
    avatarUrl: string;
    lastName: string;
    firstName: string;
    patronymic: string;
    rating: number;
    criteria: CriteriaDTO;
}

const fetchHHCardData = async (): Promise<FetchHHCardDTO> => {
    return {
        avatarUrl: "https://i.pravatar.cc/50",
        criteria: {
            workable: 7,
            functionalRequirements: 8,
            manufacturability: 5,
            presentation: 3,
            potential: 10
        },
        firstName: "Ivan",
        lastName: "Gulyaev",
        patronymic: "Ivanovich",
        rating: 8
    }
}