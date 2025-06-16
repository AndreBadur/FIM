'use client'
import {Button} from '@/components/ui/button'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
import {DatePicker} from '../ui/datePicker'

export function CreateMachinaryForms() {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button variant="outline" className="rounded-3xl">
                        + Adicionar
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                            Formulário de criação de maquinários
                        </DialogTitle>
                        <DialogDescription>
                            Preencha os dados para adicionar um novo maquinario
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">nome</Label>
                            <Input
                                id="name-1"
                                name="name"
                                placeholder="Como deseja chamar?"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="model-1">Modelo</Label>
                            <Input
                                id="model-1"
                                name="model"
                                placeholder="Modelo"
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="machinery-type-1">
                                Tipo de maquina
                            </Label>
                            <Input
                                id="machinery-type-1"
                                name="machinery-type"
                                placeholder="Escavadeira, Regadora, Ceifadora, ..."
                            />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="datepicker-1">
                                Última Manutenção
                            </Label>
                            <Input
                                type="hidden"
                                id="datepicker-1"
                                name="datepicker"
                                //aqui eu envio o valor de data como um atibuto hidden
                                //value={}
                            />
                            <DatePicker />
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
