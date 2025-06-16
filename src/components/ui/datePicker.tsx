'use client'

import * as React from 'react'
import {format} from 'date-fns'
import {ptBR} from 'date-fns/locale'
import {Calendar as CalendarIcon} from 'lucide-react'
import {Button} from '@/components/ui/button'
import {Calendar} from '@/components/ui/calendar'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'

// interface Props {
//     name: string
//     titulo: string
//     //depois precisa colocar um elemento input hidden para passar os valores para o formulario
// }
export function DatePicker() {
    const [date, setDate] = React.useState<Date>()

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    data-empty={!date}
                    className="data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal">
                    <CalendarIcon />
                    {date ? (
                        format(date, 'PPP', {locale: ptBR})
                    ) : (
                        <span>Selecione uma data</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    locale={ptBR}
                />
            </PopoverContent>
        </Popover>
    )
}
