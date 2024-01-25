import java.util.Scanner;
public class findArrayElementIndex {
    public static void main(String[] args) {
        Scanner r = new Scanner(System.in); 
        int n =r.nextInt();
        int arr1[] = new int[n];
        for(int i=0;i<arr1.length;i++){
            arr1[i]=r.nextInt();
        }
        System.out.println("Enter the element");
        int element = r.nextInt();
        int indx = -1;// we have taken indx as -1, because in array first index started from
        //0 so we can't give value zero to the variable indx
        for(int i=0; i<arr1.length; i++){
            if(arr1[i] == element){
                indx = i;
                break;
            }
           
        }
 System.out.println("Element index found :" + indx);
 r.close();
    }
}
