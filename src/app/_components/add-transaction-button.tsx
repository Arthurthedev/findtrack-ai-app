"use client";
import { useState } from "react";
import Image from "next/image";
import PlusIcon from "@/src/assets/recent-transactions/plus-icon.png";
import ConfirmIcon from "@/src/assets/recent-transactions/confirm-icon.png"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/src/app/_components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";

export const AddTransactionButton = () => {
    const [open, setIsOpen] = useState<boolean>(false);
    return (
        <section>
            <Dialog open={open} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <button
                        type="button"
                        className="rounded-sm bg-[#9333EA] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-colors flex items-center gap-2 cursor-pointer"
                    >
                        <Image src={PlusIcon} alt="Plus Icon" />
                        <p>Adicionar</p>
                    </button>
                </DialogTrigger>
                <DialogContent className="bg-[#1E293B] text-white">
                    <DialogHeader className="p-2 ">
                        <DialogTitle>Nova transação</DialogTitle>
                    </DialogHeader>
                    <div className="-mx-[15px] border-b border-[#293345]"></div>
                    <form className="flex flex-col gap-4 pt-4">
                        <div className="space-y-2">
                            <Label>Titulo</Label>
                            <Input
                                className="bg-[#293445]"
                                id="name"
                                placeholder="Ex: Almoço, Freela..."
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Valor (R$)</Label>
                            <Input 
                                className="rounded-xl py-4 bg-[#293445]"
                                id="amount"
                                type="number"
                                placeholder="0,00"
                            />
                        </div>
                        <div className="space-y-2">
                            <label>Tipo</label>
                            <Select>
                                <SelectTrigger className="w-full bg-[#293445]">
                                    <SelectValue placeholder="Selecione o tipo" />
                                </SelectTrigger>
                                <SelectContent></SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label>Categoria</label>
                            <Select>
                                <SelectTrigger className="w-full bg-[#293445]">
                                    <SelectValue placeholder="Selecione o tipo" />
                                </SelectTrigger>
                                <SelectContent></SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label>Método de pagamento</label>
                            <Select>
                                <SelectTrigger className="w-full bg-[#293445]   ">
                                    <SelectValue placeholder="Selecione o tipo" />
                                </SelectTrigger>
                                <SelectContent></SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Data</Label>
                            <Input
                                className="bg-[#293445]"
                                id="date  "
                                placeholder="__/__/_____"
                            />
                        </div>
                        <DialogFooter className="gap-4 border-none bg-[#1E293B]">
                          <button className="border border-[#CAD5E2] rounded-lg w-1/3 py-2.5 cursor-pointer">Cancelar</button>
                          <button className="bg-[#8E51FF] w-2/3 flex items-center justify-center gap-2 rounded-xl cursor-pointer">
                            <Image src={ConfirmIcon} alt="icone de confirmação"/>
                            <p className="font-semibold text-sm">Salvar transação</p>
                          </button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </section>
    );
};
