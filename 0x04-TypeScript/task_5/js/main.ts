export interface MajorCredits {
  credits: number;
  brand: 'major';
}

export interface MinorCredits {
  credits: number;
  brand: 'minor';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): 
MajorCredits{
  const totalCredits = subject1.credits + subject2.credits;
  return {credits: totalCredits, brand: 'major'};
} 

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits):
MinorCredits {
  const totalCredits = subject1.credits + subject2.credits;
  return { credits: totalCredits, brand: 'minor' };
}
