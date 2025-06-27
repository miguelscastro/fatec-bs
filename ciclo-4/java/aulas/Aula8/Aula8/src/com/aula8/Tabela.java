package com.aula8;

//SOBRECARGA SOH IMPORTA A ASSINATURA E NADA MAIS
public class Tabela {

    public static void inserir(){

    }

    public static String inserir(Cliente cliente){
        String sql = "INSERT INTO Cliente VALUES(";
        sql = sql + "\"" + cliente.getNome() + "\",\"";
        sql += cliente.getCpf() + "\");"; 

        return sql;
    }

    public static String inserir(Produto produto){
        String sql = "INSERT INTO Produto VALUES(";
        sql += "\"" + produto.getNome() + "\",";
        sql += produto.getPreco() + ");";
        return sql;
    }

}
