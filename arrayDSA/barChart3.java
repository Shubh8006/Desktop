import java.util.Scanner;
public class barChart3 {
    public static void main(String[] args) {
        Scanner r =new Scanner(System.in);
        System.out.println("Enter the array size: ");
        int n =r.nextInt();
        int arr[] = new int[n];
        System.out.println("Enter the array elements");
        for(int i=0;i<arr.length;i++){
            arr[i] = r.nextInt();
        }
        int max = arr[0];
        for(int i =0; i< arr.length; i++){
            if(arr[i] > max){
                max = arr[i];

            }
        }
        for(int floor=max; floor>=1;floor--){
            for(int i =0; i<arr.length;i++){
                if(arr[i]>= floor){
                    System.out.print("*\t");
                }else{
                    System.out.print("\t");
                }
            }
            System.out.println();
        }


    }
    
}
