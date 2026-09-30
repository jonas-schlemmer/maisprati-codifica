public class Main {
    public static void main(String[] args) {
        System.out.println("Olá Mundo!");
        // public = modificador de acesso (qualquer código de qualquer lugar pode ver).

        // static = pertence a classe, e não um método que a classe gera

        // void = não retorna nada

        /*
         * Tipo primitivo -> Guardam o valor diretamente - São 8: byte, short, int, float...
         * Tipo Por Referência -> Guardam o endereço de um objeto. String, arrays...
         *
         * byte    -  8 bits -128 a 127
         * short   - 16 bits
         * int     - 32 bits
         * long    - 64 bits
         * float   - 32 bits ~7 casas de precisão
         * double  - 64 bits ~15 casas de precisão
         * char    - 16 bits
         * boolean - true | false
         * */

        byte idade = 35;
        short ano = 2026;
        int populacao = 213000;
        long distancia = 1102021902;
        float altura = 1.75f;
        double pi = 3.14123123123;
        char inicial = 'J';
        boolean certo = true;

        System.out.println("Idade: " + idade + " | Altura " + altura + "m");
        System.out.println(0.1 + 0.2);

        String nome = "Jonas Schlemmer";
        System.out.println(nome.length());
        System.out.println(nome.toUpperCase());
        System.out.println(nome.charAt(0));
    }
}