import java.util.Scanner;

public class sumOf2Array {
    public static void main(String[] args) {
//         Scanner r = new Scanner(System.in);
//         int n1 = r.nextInt();
//         int a[] = new int[n1];
//         for (int i = 0; i < a.length; i++) {
//             a[i] = r.nextInt();
//         }
//         int n2 = r.nextInt();
//         int b[] = new int[n2];
//         for (int i = 0; i < b.length; i++) {
//             b[i] = r.nextInt();
//         }
//     int ans[]= new int[n1>n2 ? n1:n2];
//     int i =n1-1, j=n2-1, k=ans.length-1;
//     int c=0;
//     while(k>=0){
//         int sum1 =0;
//         if(i>=0){
//             sum1 += a[i];
//         } 
//         if(j>=0){
//             sum1 += b[j]; 
//         } 
                                                                                    
//         sum1 +=c;
//         c=sum1/10;
//         sum1 =sum1%10;
//         ans[k]=sum1;
                        
//         i--;
//         j--;
//         k--;
//     }
//     if(c>0) System.out.println(c);
//     for(int x : ans)System.out.println(x);
//      r.close();

Scanner r= new Scanner(System.in);
int n1 = r.nextInt();
int a[]= new int[n1];
for(int i=0; i<a.length; i++){
    a[i]= r.nextInt();
}
int n2 = r.nextInt();
int b[]= new int[n2];
for(int j=0; j<b.length; j++){
    b[j]= r.nextInt();
}

int answer[] = new int[n1>n2 ? n1:n2];
int carry=0;
int i = a.length-1;
int j= b.length -1;
int k = answer.length - 1;
while(k>=0){
    int dig = carry;
    if(i>=0){
        dig += a[i];
    }
    if(j>=0){
        dig += a[j];
    }
    carry = dig/10;
    dig = dig%10;
    dig = answer[k];
    i--;
    j--;
    k--;
}
      if(carry!=0){
        System.out.print(carry);
      }
      for(int x: answer){
        System.out.print(x);
      }
     }
 }