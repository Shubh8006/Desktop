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
                    System.out.println("*/t/");
                }else{
                    System.out.println("/t/");
                }
            }
           System.out.println();
        }
     r.close();

    }
    
}
// public class barChart3{
// public static void main(String[] args) {
    


// Scanner r = new Scanner(System.in);
// int n1 = r.nextInt();
//         int [] arr1 = new int[n1];
//         for(int i=0; i<arr1.length; i++){
//             arr1[i]= r.nextInt();
//         }
//         int n2 = r.nextInt();
//         int [] arr2 = new int[n2];
//         for(int i=0; i<arr2.length; i++){
//             arr2[i]= r.nextInt();
//         }

//         int sum[]= new int[n1 > n2? n1: n2];

//         int carry=0;
//         int i = arr1.length -1;
//         int j = arr2.length -1;
//         int k = sum.length -1;

//         while(k>=0){
//             int d=carry;
//             if(i>=0){
//                 d+=arr1[i];
//             }
//             if(j>=0){
//             d += arr2[j];
//             }
//             carry=d/10;
//             d = d%10;
//             sum[k]=d;
//             i--;
//             k--;
//             j--;

//         }
//         if(carry!=0){
//             System.out.print(carry);
//         }
//         for(int val: sum){
//             System.out.print(val);
//         }
//     }
// }
