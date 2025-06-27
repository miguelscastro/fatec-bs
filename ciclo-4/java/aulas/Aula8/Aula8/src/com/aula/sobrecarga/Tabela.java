 package com.aula.sobrecarga;


// Sobrecarga só importa a assinatura e nd mais
 public class Tabela {

    public static String inserir(Cliente cliente){
        String sql = "INSERT INTO Cliente Values(";
        sql += "\"" +  cliente.getNome() + "\",\"";
        sql += cliente.getCpf() +"\")";
        return sql;
    }

    public static String inserir(Produto produto){
        String sql = "INSERT INTO Produto Values(";
        sql += "\"" +  produto.getNome() + "\",";
        sql += produto.getPreco() +")";
        return sql;
    }
}