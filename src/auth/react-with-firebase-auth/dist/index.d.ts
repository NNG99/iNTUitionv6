import * as React from 'react';
import * as firebase from 'firebase';
export declare type WrappedComponentProps = {
    signInWithEmailAndPassword: (email: string, password: string) => void;
    createUserWithEmailAndPassword: (email: string, password: string) => void;
    signInWithGoogle: () => void;
    signInWithFacebook: () => void;
    signInWithGithub: () => void;
    signInWithTwitter: () => void;
    signInWithPhoneNumber: (phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier) => Promise<any>;
    signInAnonymously: () => void;
    signOut: () => void;
    setError: (error: any) => void;
    user?: firebase.User;
    error?: firebase.FirebaseError;
};
export declare type PossibleProviders = 'googleProvider' | 'facebookProvider' | 'twitterProvider' | 'githubProvider';
export declare type ProvidersMapper = {
    googleProvider?: firebase.auth.GithubAuthProvider_Instance;
    facebookProvider?: firebase.auth.FacebookAuthProvider_Instance;
    twitterProvider?: firebase.auth.TwitterAuthProvider_Instance;
    githubProvider?: firebase.auth.GithubAuthProvider_Instance;
};
export declare type HocParameters = {
    firebaseAppAuth: firebase.auth.Auth;
    providers?: ProvidersMapper;
};
export declare type FirebaseAuthProviderState = {
    user?: firebase.User;
    error?: string;
};
declare const withFirebaseAuth: ({ firebaseAppAuth, providers, }: HocParameters) => (WrappedComponent: React.StatelessComponent<WrappedComponentProps>) => {
    new (props: Readonly<{}>): {
        state: {
            user: undefined;
            error: undefined;
        };
        unsubscribeAuthStateListener: firebase.Unsubscribe;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setError: (error: any) => void;
        tryTo<T>(operation: () => Promise<T>): Promise<T>;
        tryToSignInWithProvider: (provider: PossibleProviders) => Promise<firebase.auth.UserCredential>;
        signOut: () => Promise<void>;
        signInAnonymously: () => Promise<firebase.auth.UserCredential>;
        signInWithGithub: () => Promise<firebase.auth.UserCredential>;
        signInWithTwitter: () => Promise<firebase.auth.UserCredential>;
        signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
        signInWithFacebook: () => Promise<firebase.auth.UserCredential>;
        signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
        signInWithPhoneNumber: (phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier) => Promise<firebase.auth.ConfirmationResult>;
        createUserWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
        sharedHandlers: {
            signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
            createUserWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
            signInWithGithub: () => Promise<firebase.auth.UserCredential>;
            signInWithTwitter: () => Promise<firebase.auth.UserCredential>;
            signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
            signInWithFacebook: () => Promise<firebase.auth.UserCredential>;
            signInWithPhoneNumber: (phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier) => Promise<firebase.auth.ConfirmationResult>;
            setError: (error: any) => void;
            signInAnonymously: () => Promise<firebase.auth.UserCredential>;
            signOut: () => Promise<void>;
        };
        render(): JSX.Element;
        setState<K extends "user" | "error">(state: FirebaseAuthProviderState | ((prevState: Readonly<FirebaseAuthProviderState>, props: Readonly<{}>) => FirebaseAuthProviderState | Pick<FirebaseAuthProviderState, K> | null) | Pick<FirebaseAuthProviderState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    new (props: {}, context?: any): {
        state: {
            user: undefined;
            error: undefined;
        };
        unsubscribeAuthStateListener: firebase.Unsubscribe;
        componentDidMount(): void;
        componentWillUnmount(): void;
        setError: (error: any) => void;
        tryTo<T>(operation: () => Promise<T>): Promise<T>;
        tryToSignInWithProvider: (provider: PossibleProviders) => Promise<firebase.auth.UserCredential>;
        signOut: () => Promise<void>;
        signInAnonymously: () => Promise<firebase.auth.UserCredential>;
        signInWithGithub: () => Promise<firebase.auth.UserCredential>;
        signInWithTwitter: () => Promise<firebase.auth.UserCredential>;
        signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
        signInWithFacebook: () => Promise<firebase.auth.UserCredential>;
        signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
        signInWithPhoneNumber: (phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier) => Promise<firebase.auth.ConfirmationResult>;
        createUserWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
        sharedHandlers: {
            signInWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
            createUserWithEmailAndPassword: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
            signInWithGithub: () => Promise<firebase.auth.UserCredential>;
            signInWithTwitter: () => Promise<firebase.auth.UserCredential>;
            signInWithGoogle: () => Promise<firebase.auth.UserCredential>;
            signInWithFacebook: () => Promise<firebase.auth.UserCredential>;
            signInWithPhoneNumber: (phoneNumber: string, applicationVerifier: firebase.auth.ApplicationVerifier) => Promise<firebase.auth.ConfirmationResult>;
            setError: (error: any) => void;
            signInAnonymously: () => Promise<firebase.auth.UserCredential>;
            signOut: () => Promise<void>;
        };
        render(): JSX.Element;
        setState<K extends "user" | "error">(state: FirebaseAuthProviderState | ((prevState: Readonly<FirebaseAuthProviderState>, props: Readonly<{}>) => FirebaseAuthProviderState | Pick<FirebaseAuthProviderState, K> | null) | Pick<FirebaseAuthProviderState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        readonly props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    displayName: string;
};
export default withFirebaseAuth;
