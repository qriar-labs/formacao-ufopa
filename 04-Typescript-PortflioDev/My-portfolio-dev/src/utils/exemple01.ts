export function diasAteOFimDoAno(): number {
    const agora = new Date();
    const fimDoAno = new Date(agora.getFullYear(), 11, 31);
    const diferencaEmMilissegundos = fimDoAno.getTime() - agora.getTime();
    const dias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
    return dias;
}

console.log(`Faltam ${diasAteOFimDoAno()} dias para o fim do ano.`);
