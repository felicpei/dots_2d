﻿
    declare namespace CS {
    //keep type incompatibility / 此属性保持类型不兼容
    const __keep_incompatibility: unique symbol;
    interface $Ref<T> {
        value: T
    }
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            set_Item(index: number, value: T):void;
        }
    }
    interface $Task<T> {}
    namespace System {
        class Object
        {
            protected [__keep_incompatibility]: never;
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public GetHashCode () : number
            public GetType () : System.Type
            public ToString () : string
            public static ReferenceEquals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        class ValueType extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class Void extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormattable
        {
        }
        interface IEquatable$1<T>
        {
        }
        class Single extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ISpanFormattable
        {
        }
        interface IComparable
        {
        }
        interface IComparable$1<T>
        {
        }
        interface IConvertible
        {
        }
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class String extends System.Object implements System.ICloneable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.Collections.Generic.IEnumerable$1<number>, System.Collections.IEnumerable, System.IEquatable$1<string>
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICloneable
        {
        }
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Array extends System.Object implements System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.ICloneable, System.Collections.ICollection, System.Collections.IEnumerable, System.Collections.IList
        {
            protected [__keep_incompatibility]: never;
        }
        class Enum extends System.ValueType implements System.IFormattable, System.IComparable, System.IConvertible
        {
            protected [__keep_incompatibility]: never;
        }
        class Exception extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Exception
        {
            protected [__keep_incompatibility]: never;
        }
        interface IFormatProvider
        {
        }
        class Delegate extends System.Object implements System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
            public get Method(): System.Reflection.MethodInfo;
            public get Target(): any;
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $method: System.Reflection.MethodInfo) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string) : Function
            public static CreateDelegate ($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean) : Function
            public static CreateDelegate ($type: System.Type, $target: any, $method: string, $ignoreCase: boolean) : Function
            public DynamicInvoke (...args: any[]) : any
            public Clone () : any
            public GetObjectData ($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext) : void
            public GetInvocationList () : System.Array$1<Function>
            public static Combine ($a: Function, $b: Function) : Function
            public static Combine (...delegates: Function[]) : Function
            public static Remove ($source: Function, $value: Function) : Function
            public static RemoveAll ($source: Function, $value: Function) : Function
            public static op_Equality ($d1: Function, $d2: Function) : boolean
            public static op_Inequality ($d1: Function, $d2: Function) : boolean
        }
        interface MulticastDelegate
        { 
        (...args:any[]) : any; 
        Invoke?: (...args:any[]) => any;
        }
        var MulticastDelegate: { new (func: (...args:any[]) => any): MulticastDelegate; }
        interface Converter$2<TInput, TOutput>
        { 
        (input: TInput) : TOutput; 
        Invoke?: (input: TInput) => TOutput;
        }
        interface Predicate$1<T>
        { 
        (obj: T) : boolean; 
        Invoke?: (obj: T) => boolean;
        }
        interface Action$1<T>
        { 
        (obj: T) : void; 
        Invoke?: (obj: T) => void;
        }
        interface IDisposable
        {
        }
        interface Comparison$1<T>
        { 
        (x: T, y: T) : number; 
        Invoke?: (x: T, y: T) => number;
        }
        class Double extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Type extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Reflection.IReflect
        {
            protected [__keep_incompatibility]: never;
            public static Delimiter : number
            public static EmptyTypes : System.Array$1<System.Type>
            public static Missing : any
            public static FilterAttribute : System.Reflection.MemberFilter
            public static FilterName : System.Reflection.MemberFilter
            public static FilterNameIgnoreCase : System.Reflection.MemberFilter
            public get IsSerializable(): boolean;
            public get ContainsGenericParameters(): boolean;
            public get IsVisible(): boolean;
            public get MemberType(): System.Reflection.MemberTypes;
            public get Namespace(): string;
            public get AssemblyQualifiedName(): string;
            public get FullName(): string;
            public get Assembly(): System.Reflection.Assembly;
            public get Module(): System.Reflection.Module;
            public get IsNested(): boolean;
            public get DeclaringType(): System.Type;
            public get DeclaringMethod(): System.Reflection.MethodBase;
            public get ReflectedType(): System.Type;
            public get UnderlyingSystemType(): System.Type;
            public get IsTypeDefinition(): boolean;
            public get IsArray(): boolean;
            public get IsByRef(): boolean;
            public get IsPointer(): boolean;
            public get IsConstructedGenericType(): boolean;
            public get IsGenericParameter(): boolean;
            public get IsGenericTypeParameter(): boolean;
            public get IsGenericMethodParameter(): boolean;
            public get IsGenericType(): boolean;
            public get IsGenericTypeDefinition(): boolean;
            public get IsVariableBoundArray(): boolean;
            public get IsByRefLike(): boolean;
            public get HasElementType(): boolean;
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            public get GenericParameterPosition(): number;
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            public get Attributes(): System.Reflection.TypeAttributes;
            public get IsAbstract(): boolean;
            public get IsImport(): boolean;
            public get IsSealed(): boolean;
            public get IsSpecialName(): boolean;
            public get IsClass(): boolean;
            public get IsNestedAssembly(): boolean;
            public get IsNestedFamANDAssem(): boolean;
            public get IsNestedFamily(): boolean;
            public get IsNestedFamORAssem(): boolean;
            public get IsNestedPrivate(): boolean;
            public get IsNestedPublic(): boolean;
            public get IsNotPublic(): boolean;
            public get IsPublic(): boolean;
            public get IsAutoLayout(): boolean;
            public get IsExplicitLayout(): boolean;
            public get IsLayoutSequential(): boolean;
            public get IsAnsiClass(): boolean;
            public get IsAutoClass(): boolean;
            public get IsUnicodeClass(): boolean;
            public get IsCOMObject(): boolean;
            public get IsContextful(): boolean;
            public get IsCollectible(): boolean;
            public get IsEnum(): boolean;
            public get IsMarshalByRef(): boolean;
            public get IsPrimitive(): boolean;
            public get IsValueType(): boolean;
            public get IsSignatureType(): boolean;
            public get IsSecurityCritical(): boolean;
            public get IsSecuritySafeCritical(): boolean;
            public get IsSecurityTransparent(): boolean;
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            public get TypeHandle(): System.RuntimeTypeHandle;
            public get GUID(): System.Guid;
            public get BaseType(): System.Type;
            public static get DefaultBinder(): System.Reflection.Binder;
            public get IsInterface(): boolean;
            public IsEnumDefined ($value: any) : boolean
            public GetEnumName ($value: any) : string
            public GetEnumNames () : System.Array$1<string>
            public FindInterfaces ($filter: System.Reflection.TypeFilter, $filterCriteria: any) : System.Array$1<System.Type>
            public FindMembers ($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any) : System.Array$1<System.Reflection.MemberInfo>
            public IsSubclassOf ($c: System.Type) : boolean
            public IsAssignableFrom ($c: System.Type) : boolean
            public GetType () : System.Type
            public GetElementType () : System.Type
            public GetArrayRank () : number
            public GetGenericTypeDefinition () : System.Type
            public GetGenericArguments () : System.Array$1<System.Type>
            public GetGenericParameterConstraints () : System.Array$1<System.Type>
            public GetConstructor ($types: System.Array$1<System.Type>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructor ($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.ConstructorInfo
            public GetConstructors () : System.Array$1<System.Reflection.ConstructorInfo>
            public GetConstructors ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.ConstructorInfo>
            public GetEvent ($name: string) : System.Reflection.EventInfo
            public GetEvent ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.EventInfo
            public GetEvents () : System.Array$1<System.Reflection.EventInfo>
            public GetEvents ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.EventInfo>
            public GetField ($name: string) : System.Reflection.FieldInfo
            public GetField ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.FieldInfo
            public GetFields () : System.Array$1<System.Reflection.FieldInfo>
            public GetFields ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.FieldInfo>
            public GetMember ($name: string) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMember ($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers () : System.Array$1<System.Reflection.MemberInfo>
            public GetMembers ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MemberInfo>
            public GetMethod ($name: string) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethod ($name: string, $genericParameterCount: number, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.MethodInfo
            public GetMethods () : System.Array$1<System.Reflection.MethodInfo>
            public GetMethods ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.MethodInfo>
            public GetNestedType ($name: string) : System.Type
            public GetNestedType ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Type
            public GetNestedTypes () : System.Array$1<System.Type>
            public GetNestedTypes ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Type>
            public GetProperty ($name: string) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperty ($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>) : System.Reflection.PropertyInfo
            public GetProperties () : System.Array$1<System.Reflection.PropertyInfo>
            public GetProperties ($bindingAttr: System.Reflection.BindingFlags) : System.Array$1<System.Reflection.PropertyInfo>
            public GetDefaultMembers () : System.Array$1<System.Reflection.MemberInfo>
            public static GetTypeHandle ($o: any) : System.RuntimeTypeHandle
            public static GetTypeArray ($args: System.Array$1<any>) : System.Array$1<System.Type>
            public static GetTypeCode ($type: System.Type) : System.TypeCode
            public static GetTypeFromCLSID ($clsid: System.Guid) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $throwOnError: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string) : System.Type
            public static GetTypeFromProgID ($progID: string) : System.Type
            public static GetTypeFromProgID ($progID: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string) : System.Type
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo) : any
            public InvokeMember ($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>) : any
            public GetInterface ($name: string) : System.Type
            public GetInterface ($name: string, $ignoreCase: boolean) : System.Type
            public GetInterfaces () : System.Array$1<System.Type>
            public GetInterfaceMap ($interfaceType: System.Type) : System.Reflection.InterfaceMapping
            public IsInstanceOfType ($o: any) : boolean
            public IsEquivalentTo ($other: System.Type) : boolean
            public GetEnumUnderlyingType () : System.Type
            public GetEnumValues () : System.Array
            public MakeArrayType () : System.Type
            public MakeArrayType ($rank: number) : System.Type
            public MakeByRefType () : System.Type
            public MakeGenericType (...typeArguments: System.Type[]) : System.Type
            public MakePointerType () : System.Type
            public static MakeGenericSignatureType ($genericTypeDefinition: System.Type, ...typeArguments: System.Type[]) : System.Type
            public static MakeGenericMethodParameter ($position: number) : System.Type
            public Equals ($o: any) : boolean
            public Equals ($o: System.Type) : boolean
            public static GetTypeFromHandle ($handle: System.RuntimeTypeHandle) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static GetType ($typeName: string, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean) : System.Type
            public static GetType ($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean) : System.Type
            public static op_Equality ($left: System.Type, $right: System.Type) : boolean
            public static op_Inequality ($left: System.Type, $right: System.Type) : boolean
            public static ReflectionOnlyGetType ($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean) : System.Type
            public static GetTypeFromCLSID ($clsid: System.Guid, $server: string, $throwOnError: boolean) : System.Type
            public static GetTypeFromProgID ($progID: string, $server: string, $throwOnError: boolean) : System.Type
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
        }
        class UInt64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
        }
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
        enum TypeCode
        { Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        class Guid extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Func$2<T, TResult>
        { 
        (arg: T) : TResult; 
        Invoke?: (arg: T) => TResult;
        }
        interface Func$4<T1, T2, T3, TResult>
        { 
        (arg1: T1, arg2: T2, arg3: T3) : TResult; 
        Invoke?: (arg1: T1, arg2: T2, arg3: T3) => TResult;
        }
        class UInt32 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        interface Action
        { 
        () : void; 
        Invoke?: () => void;
        }
        var Action: { new (func: () => void): Action; }
        interface Action$2<T1, T2>
        { 
        (arg1: T1, arg2: T2) : void; 
        Invoke?: (arg1: T1, arg2: T2) => void;
        }
        class Byte extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Nullable$1<T> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Int16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class UInt16 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>
        {
            protected [__keep_incompatibility]: never;
        }
        class Int64 extends System.ValueType implements System.IFormattable, System.ISpanFormattable, System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine {
        /** Class containing methods to ease debugging while developing a game.
        */
        class Debug extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** Get default debug logger.
            */
            public static get unityLogger(): UnityEngine.ILogger;
            /** Reports whether the development console is visible. The development console automatically appears when an error has been logged. For example:
            */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build".
            */
            public static get isDebugBuild(): boolean;
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3) : void
            /** Draws a line between specified start and end points.
            * @param start Point in world space where the line should start.
            * @param end Point in world space where the line should end.
            * @param color Color of the line.
            * @param duration How long the line should be visible for.
            * @param depthTest Should the line be obscured by objects closer to the camera?
            */
            public static DrawLine ($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3) : void
            /** Draws a line from start to start + dir in world coordinates.
            * @param start Point in world space where the ray should start.
            * @param dir Direction and length of the ray.
            * @param color Color of the drawn line.
            * @param duration How long the line will be visible for (in seconds).
            * @param depthTest Should the line be obscured by other objects closer to the camera?
            */
            public static DrawRay ($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean) : void
            public static Break () : void
            public static DebugBreak () : void
            /** Logs a message to the Unity Console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any) : void
            /** Logs a message to the Unity Console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static Log ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Logs a formatted message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            * @param logType Type of message e.g. warn or error etc.
            * @param logOptions Option flags to treat the log message special.
            */
            public static LogFormat ($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogError ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted error message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted error message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogErrorFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public static ClearDeveloperConsole () : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception) : void
            /** A variant of Debug.Log that logs an error message to the console.
            * @param context Object to which the message applies.
            * @param exception Runtime Exception.
            */
            public static LogException ($exception: System.Exception, $context: UnityEngine.Object) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any) : void
            /** A variant of Debug.Log that logs a warning message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogWarning ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted warning message to the Unity Console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogWarningFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $context: UnityEngine.Object) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any) : void
            public static Assert ($condition: boolean, $message: string) : void
            /** Assert a condition and logs an error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param context Object to which the message applies.
            * @param message String or object to be converted to string representation for display.
            */
            public static Assert ($condition: boolean, $message: any, $context: UnityEngine.Object) : void
            public static Assert ($condition: boolean, $message: string, $context: UnityEngine.Object) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $format: string, ...args: any[]) : void
            /** Assert a condition and logs a formatted error message to the Unity console on failure.
            * @param condition Condition you expect to be true.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static AssertFormat ($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any) : void
            /** A variant of Debug.Log that logs an assertion message to the console.
            * @param message String or object to be converted to string representation for display.
            * @param context Object to which the message applies.
            */
            public static LogAssertion ($message: any, $context: UnityEngine.Object) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($format: string, ...args: any[]) : void
            /** Logs a formatted assertion message to the Unity console.
            * @param format A composite format string.
            * @param args Format arguments.
            * @param context Object to which the message applies.
            */
            public static LogAssertionFormat ($context: UnityEngine.Object, $format: string, ...args: any[]) : void
            public constructor ()
        }
        interface ILogger extends UnityEngine.ILogHandler
        {
        }
        interface ILogHandler
        {
        }
        /** Representation of 3D vectors and points.
        */
        class Vector3 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector3>
        {
            protected [__keep_incompatibility]: never;
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            /** Z component of the vector.
            */
            public z : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector3;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector3(0, 0, 0).
            */
            public static get zero(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 1, 1).
            */
            public static get one(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, 1).
            */
            public static get forward(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 0, -1).
            */
            public static get back(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, 1, 0).
            */
            public static get up(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(0, -1, 0).
            */
            public static get down(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(-1, 0, 0).
            */
            public static get left(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(1, 0, 0).
            */
            public static get right(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.PositiveInfinity, float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector3;
            /** Shorthand for writing Vector3(float.NegativeInfinity, float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector3;
            /** Spherically interpolates between two vectors.
            */
            public static Slerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Spherically interpolates between two vectors.
            */
            public static SlerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>) : void
            /** Makes vectors normalized and orthogonal to each other.
            */
            public static OrthoNormalize ($normal: $Ref<UnityEngine.Vector3>, $tangent: $Ref<UnityEngine.Vector3>, $binormal: $Ref<UnityEngine.Vector3>) : void
            /** Rotates a vector current towards target.
            * @param current The vector being managed.
            * @param target The vector.
            * @param maxRadiansDelta The maximum angle in radians allowed for this rotation.
            * @param maxMagnitudeDelta The maximum allowed change in vector magnitude for this rotation.
            * @returns The location that RotateTowards generates. 
            */
            public static RotateTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxRadiansDelta: number, $maxMagnitudeDelta: number) : UnityEngine.Vector3
            /** Linearly interpolates between two points.
            * @param a Start value, returned when t = 0.
            * @param b End value, returned when t = 1.
            * @param t Value used to interpolate between a and b.
            * @returns Interpolated value, equals to a + (b - a) * t. 
            */
            public static Lerp ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Linearly interpolates between two vectors.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3, $t: number) : UnityEngine.Vector3
            /** Calculate a position between the points specified by current and target, moving no farther than the distance specified by maxDistanceDelta.
            * @param current The position to move from.
            * @param target The position to move towards.
            * @param maxDistanceDelta Distance to move current per call.
            * @returns The new position. 
            */
            public static MoveTowards ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $maxDistanceDelta: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number) : UnityEngine.Vector3
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector3, $target: UnityEngine.Vector3, $currentVelocity: $Ref<UnityEngine.Vector3>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector3
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x, y and z components of an existing Vector3.
            */
            public Set ($newX: number, $newY: number, $newZ: number) : void
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector3) : void
            /** Cross Product of two vectors.
            */
            public static Cross ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector3) : boolean
            /** Reflects a vector off the plane defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector3, $inNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Makes this vector have a magnitude of 1.
            */
            public static Normalize ($value: UnityEngine.Vector3) : UnityEngine.Vector3
            public Normalize () : void
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : number
            /** Projects a vector onto another vector.
            */
            public static Project ($vector: UnityEngine.Vector3, $onNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Projects a vector onto a plane defined by a normal orthogonal to the plane.
            * @param planeNormal The direction from the vector towards the plane.
            * @param vector The location of the vector above the plane.
            * @returns The location of the vector on the plane. 
            */
            public static ProjectOnPlane ($vector: UnityEngine.Vector3, $planeNormal: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Calculates the angle between vectors from and.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3) : number
            /** Calculates the signed angle between vectors from and to in relation to axis.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @param axis A vector around which the other vectors are rotated.
            * @returns Returns the signed angle between from and to in degrees. 
            */
            public static SignedAngle ($from: UnityEngine.Vector3, $to: UnityEngine.Vector3, $axis: UnityEngine.Vector3) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector3, $maxLength: number) : UnityEngine.Vector3
            public static Magnitude ($vector: UnityEngine.Vector3) : number
            public static SqrMagnitude ($vector: UnityEngine.Vector3) : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Addition ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Subtraction ($a: UnityEngine.Vector3, $b: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_UnaryNegation ($a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Multiply ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Multiply ($d: number, $a: UnityEngine.Vector3) : UnityEngine.Vector3
            public static op_Division ($a: UnityEngine.Vector3, $d: number) : UnityEngine.Vector3
            public static op_Equality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector3, $rhs: UnityEngine.Vector3) : boolean
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            public constructor ($x: number, $y: number, $z: number)
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Representation of RGBA colors.
        */
        class Color extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Color>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for all objects Unity can reference.
        */
        class Object extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The name of the object.
            */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user?
            */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            public GetInstanceID () : number
            public static op_Implicit ($exists: UnityEngine.Object) : boolean
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform) : UnityEngine.Object
            /** Clones the object original and returns the clone.
            * @param original An existing object that you want to make a copy of.
            * @param position Position for the new object.
            * @param rotation Orientation of the new object.
            * @param parent Parent that will be assigned to the new object.
            * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent.
            * @returns The instantiated clone. 
            */
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean) : UnityEngine.Object
            public static Instantiate ($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean) : UnityEngine.Object
            /** Removes a GameObject, component or asset.
            * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object, $t: number) : void
            /** Removes a GameObject, component or asset.
            * @param obj The object to destroy.
            * @param t The optional amount of time to delay before destroying the object.
            */
            public static Destroy ($obj: UnityEngine.Object) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object, $allowDestroyingAssets: boolean) : void
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead.
            * @param obj Object to be destroyed.
            * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
            */
            public static DestroyImmediate ($obj: UnityEngine.Object) : void
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type) : System.Array$1<UnityEngine.Object>
            /** Gets a list of all loaded objects of Type type.
            * @param type The type of object to find.
            * @param includeInactive If true, components attached to inactive GameObjects are also included.
            * @returns The array of objects found matching the type specified. 
            */
            public static FindObjectsOfType ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Object>
            /** Do not destroy the target Object when loading a new Scene.
            * @param target An Object not destroyed on Scene change.
            */
            public static DontDestroyOnLoad ($target: UnityEngine.Object) : void
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type) : UnityEngine.Object
            /** Returns the first active loaded object of Type type.
            * @param type The type of object to find.
            * @returns Object The first active loaded object that matches the specified type. It returns null if no Object matches the type. 
            */
            public static FindObjectOfType ($type: System.Type, $includeInactive: boolean) : UnityEngine.Object
            public static op_Equality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public static op_Inequality ($x: UnityEngine.Object, $y: UnityEngine.Object) : boolean
            public constructor ()
        }
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback.
        */
        enum LogType
        { Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        /** Option flags for specifying special treatment of a log message.
        */
        enum LogOption
        { None = 0, NoStacktrace = 1 }
        /** Representation of 2D vectors and points.
        */
        class Vector2 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector2>
        {
            protected [__keep_incompatibility]: never;
            /** X component of the vector.
            */
            public x : number
            /** Y component of the vector.
            */
            public y : number
            public static kEpsilon : number
            public static kEpsilonNormalSqrt : number
            /** Returns this vector with a magnitude of 1 (Read Only).
            */
            public get normalized(): UnityEngine.Vector2;
            /** Returns the length of this vector (Read Only).
            */
            public get magnitude(): number;
            /** Returns the squared length of this vector (Read Only).
            */
            public get sqrMagnitude(): number;
            /** Shorthand for writing Vector2(0, 0).
            */
            public static get zero(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 1).
            */
            public static get one(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, 1).
            */
            public static get up(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(0, -1).
            */
            public static get down(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(-1, 0).
            */
            public static get left(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(1, 0).
            */
            public static get right(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.PositiveInfinity, float.PositiveInfinity).
            */
            public static get positiveInfinity(): UnityEngine.Vector2;
            /** Shorthand for writing Vector2(float.NegativeInfinity, float.NegativeInfinity).
            */
            public static get negativeInfinity(): UnityEngine.Vector2;
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            /** Set x and y components of an existing Vector2.
            */
            public Set ($newX: number, $newY: number) : void
            /** Linearly interpolates between vectors a and b by t.
            */
            public static Lerp ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Linearly interpolates between vectors a and b by t.
            */
            public static LerpUnclamped ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2, $t: number) : UnityEngine.Vector2
            /** Moves a point current towards target.
            */
            public static MoveTowards ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $maxDistanceDelta: number) : UnityEngine.Vector2
            /** Multiplies two vectors component-wise.
            */
            public static Scale ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Multiplies every component of this vector by the same component of scale.
            */
            public Scale ($scale: UnityEngine.Vector2) : void
            public Normalize () : void
            public ToString () : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string) : string
            /** Returns a formatted string for this vector.
            * @param format A numeric format string.
            * @param formatProvider An object that specifies culture-specific formatting.
            */
            public ToString ($format: string, $formatProvider: System.IFormatProvider) : string
            /** Returns true if the given vector is exactly equal to this vector.
            */
            public Equals ($other: any) : boolean
            public Equals ($other: UnityEngine.Vector2) : boolean
            /** Reflects a vector off the vector defined by a normal.
            */
            public static Reflect ($inDirection: UnityEngine.Vector2, $inNormal: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns the 2D vector perpendicular to this 2D vector. The result is always rotated 90-degrees in a counter-clockwise direction for a 2D coordinate system where the positive Y axis goes up.
            * @param inDirection The input direction.
            * @returns The perpendicular direction. 
            */
            public static Perpendicular ($inDirection: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Dot Product of two vectors.
            */
            public static Dot ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : number
            /** Gets the unsigned angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The unsigned angle in degrees between the two vectors. 
            */
            public static Angle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Gets the signed angle in degrees between from and to.
            * @param from The vector from which the angular difference is measured.
            * @param to The vector to which the angular difference is measured.
            * @returns The signed angle in degrees between the two vectors. 
            */
            public static SignedAngle ($from: UnityEngine.Vector2, $to: UnityEngine.Vector2) : number
            /** Returns the distance between a and b.
            */
            public static Distance ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : number
            /** Returns a copy of vector with its magnitude clamped to maxLength.
            */
            public static ClampMagnitude ($vector: UnityEngine.Vector2, $maxLength: number) : UnityEngine.Vector2
            public static SqrMagnitude ($a: UnityEngine.Vector2) : number
            public SqrMagnitude () : number
            /** Returns a vector that is made from the smallest components of two vectors.
            */
            public static Min ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Returns a vector that is made from the largest components of two vectors.
            */
            public static Max ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number) : UnityEngine.Vector2
            /** Gradually changes a vector towards a desired goal over time.
            * @param current The current position.
            * @param target The position we are trying to reach.
            * @param currentVelocity The current velocity, this value is modified by the function every time you call it.
            * @param smoothTime Approximately the time it will take to reach the target. A smaller value will reach the target faster.
            * @param maxSpeed Optionally allows you to clamp the maximum speed.
            * @param deltaTime The time since the last call to this function. By default Time.deltaTime.
            */
            public static SmoothDamp ($current: UnityEngine.Vector2, $target: UnityEngine.Vector2, $currentVelocity: $Ref<UnityEngine.Vector2>, $smoothTime: number, $maxSpeed: number, $deltaTime: number) : UnityEngine.Vector2
            public static op_Addition ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Subtraction ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $b: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_UnaryNegation ($a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Multiply ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Multiply ($d: number, $a: UnityEngine.Vector2) : UnityEngine.Vector2
            public static op_Division ($a: UnityEngine.Vector2, $d: number) : UnityEngine.Vector2
            public static op_Equality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Inequality ($lhs: UnityEngine.Vector2, $rhs: UnityEngine.Vector2) : boolean
            public static op_Implicit ($v: UnityEngine.Vector3) : UnityEngine.Vector2
            public static op_Implicit ($v: UnityEngine.Vector2) : UnityEngine.Vector3
            public constructor ($x: number, $y: number)
            public Equals ($obj: any) : boolean
            public static Equals ($objA: any, $objB: any) : boolean
            public constructor ()
        }
        /** Provides an interface to get time information from Unity.
        */
        class Time extends System.Object
        {
            protected [__keep_incompatibility]: never;
            /** The time at the beginning of this frame (Read Only).
            */
            public static get time(): number;
            /** The double precision time at the beginning of this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get timeAsDouble(): number;
            /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading.
            */
            public static get timeSinceLevelLoad(): number;
            /** The double precision time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading.
            */
            public static get timeSinceLevelLoadAsDouble(): number;
            /** The interval in seconds from the last frame to the current one (Read Only).
            */
            public static get deltaTime(): number;
            /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedTime(): number;
            /** The double precision time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedTimeAsDouble(): number;
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get unscaledTime(): number;
            /** The double precision timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game.
            */
            public static get unscaledTimeAsDouble(): number;
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedUnscaledTime(): number;
            /** The double precision timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate (Read Only). This is the time in seconds since the start of the game.
            */
            public static get fixedUnscaledTimeAsDouble(): number;
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only).
            */
            public static get unscaledDeltaTime(): number;
            /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only).
            */
            public static get fixedUnscaledDeltaTime(): number;
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed.
            */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames.
            */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only).
            */
            public static get smoothDeltaTime(): number;
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates.
            */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes.
            */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only).
            */
            public static get frameCount(): number;
            public static get renderedFrameCount(): number;
            /** The real time in seconds since the game started (Read Only).
            */
            public static get realtimeSinceStartup(): number;
            /** The real time in seconds since the game started (Read Only). Double precision version of Time.realtimeSinceStartup. 
            */
            public static get realtimeSinceStartupAsDouble(): number;
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames.
            */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime.
            */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false.
            */
            public static get inFixedTimeStep(): boolean;
            public constructor ()
        }
        /** Base class for everything attached to GameObjects.
        */
        class Component extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The game object this component is attached to. A component is always attached to a game object.
            */
            public get gameObject(): UnityEngine.GameObject;
            /** The tag of this game object.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of type if the GameObject has one attached.
            * @param type The type of Component to retrieve.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Gets the component of the specified type, if it exists.
            * @param type The type of the component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** To improve the performance of your code, consider using GetComponent with a type instead of a string.
            * @param type The name of the type of Component to get.
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its children using depth first search.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInChildren ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its children using depth first search. Works recursively.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set. includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
            */
            public GetComponentsInChildren ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInChildren ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns the Component of type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the Component of type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            * @returns A Component of the matching type, otherwise null if no Component is found. 
            */
            public GetComponentInParent ($t: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject or any of its parents.
            * @param t The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($t: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($t: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject.
            * @param type The type of Component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Checks the GameObject's tag against the defined tag.
            * @param tag The tag to compare.
            * @returns Returns true if GameObject has same tag. Returns false otherwise. 
            */
            public CompareTag ($tag: string) : boolean
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour.
            * @param methodName Name of method to call.
            * @param value Optional parameter value for the method.
            * @param options Should an error be raised if the method does not exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object.
            * @param methodName Name of the method to call.
            * @param value Optional parameter for the method.
            * @param options Should an error be raised if the target object doesn't implement the method for the message?
            */
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children.
            * @param methodName Name of the method to call.
            * @param parameter Optional parameter to pass to the method (can be any value).
            * @param options Should an error be raised if the method does not exist for a given target object?
            */
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public constructor ()
        }
        /** Position, rotation and scale of an object.
        */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
            /** The world space position of the Transform.
            */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform.
            */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees.
            */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation.
            */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space.
            */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space.
            */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space.
            */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space.
            */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent.
            */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent.
            */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform.
            */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only).
            */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            /** Matrix that transforms a point from local space into world space (Read Only).
            */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            /** Returns the topmost transform in the hierarchy.
            */
            public get root(): UnityEngine.Transform;
            /** The number of children the parent Transform has.
            */
            public get childCount(): number;
            /** The global scale of the object (Read Only).
            */
            public get lossyScale(): UnityEngine.Vector3;
            /** Has the transform changed since the last time the flag was set to 'false'?
            */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure.
            */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure.
            */
            public get hierarchyCount(): number;
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($p: UnityEngine.Transform) : void
            /** Set the parent of the transform.
            * @param parent The parent Transform to use.
            * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
            */
            public SetParent ($parent: UnityEngine.Transform, $worldPositionStays: boolean) : void
            /** Sets the world space position and rotation of the Transform component.
            */
            public SetPositionAndRotation ($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion) : void
            /** Sets the position and rotation of the Transform component in local space (i.e. relative to its parent transform).
            */
            public SetLocalPositionAndRotation ($localPosition: UnityEngine.Vector3, $localRotation: UnityEngine.Quaternion) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number) : void
            /** Moves the transform in the direction and distance of translation.
            */
            public Translate ($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform) : void
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis.
            */
            public Translate ($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
            */
            public Rotate ($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space) : void
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order).
            * @param eulers The rotation to apply in euler angles.
            */
            public Rotate ($eulers: UnityEngine.Vector3) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space) : void
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order).
            * @param xAngle Degrees to rotate the GameObject around the X axis.
            * @param yAngle Degrees to rotate the GameObject around the Y axis.
            * @param zAngle Degrees to rotate the GameObject around the Z axis.
            */
            public Rotate ($xAngle: number, $yAngle: number, $zAngle: number) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space) : void
            /** Rotates the object around the given axis by the number of degrees defined by the given angle.
            * @param axis The axis to apply rotation to.
            * @param angle The degrees of rotation to apply.
            */
            public Rotate ($axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees.
            */
            public RotateAround ($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at target's current position.
            * @param target Object to point towards.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($target: UnityEngine.Transform) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3) : void
            /** Rotates the transform so the forward vector points at worldPosition.
            * @param worldPosition Point to look at.
            * @param worldUp Vector specifying the upward direction.
            */
            public LookAt ($worldPosition: UnityEngine.Vector3) : void
            /** Transforms direction from local space to world space.
            */
            public TransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms direction x, y, z from local space to world space.
            */
            public TransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($direction: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection.
            */
            public InverseTransformDirection ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms vector from local space to world space.
            */
            public TransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms vector x, y, z from local space to world space.
            */
            public TransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($vector: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector.
            */
            public InverseTransformVector ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from local space to world space.
            */
            public TransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from local space to world space.
            */
            public TransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            /** Transforms position from world space to local space.
            */
            public InverseTransformPoint ($position: UnityEngine.Vector3) : UnityEngine.Vector3
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint.
            */
            public InverseTransformPoint ($x: number, $y: number, $z: number) : UnityEngine.Vector3
            public DetachChildren () : void
            public SetAsFirstSibling () : void
            public SetAsLastSibling () : void
            /** Sets the sibling index.
            * @param index Index to set.
            */
            public SetSiblingIndex ($index: number) : void
            public GetSiblingIndex () : number
            /** Finds a child by name n and returns it.
            * @param n Name of child to be found.
            * @returns The found child transform. Null if child with matching name isn't found. 
            */
            public Find ($n: string) : UnityEngine.Transform
            /** Is this transform a child of parent?
            */
            public IsChildOf ($parent: UnityEngine.Transform) : boolean
            public GetEnumerator () : System.Collections.IEnumerator
            /** Returns a transform child by index.
            * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
            * @returns Transform child by index. 
            */
            public GetChild ($index: number) : UnityEngine.Transform
        }
        /** Quaternions are used to represent rotations.
        */
        class Quaternion extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Quaternion>
        {
            protected [__keep_incompatibility]: never;
        }
        /** A standard 4x4 transformation matrix.
        */
        class Matrix4x4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Matrix4x4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** The coordinate space in which to operate.
        */
        enum Space
        { World = 0, Self = 1 }
        /** Base class for all entities in Unity Scenes.
        */
        class GameObject extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
            /** The Transform attached to this GameObject.
            */
            public get transform(): UnityEngine.Transform;
            /** The layer the GameObject is in.
            */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only)
            */
            public get activeSelf(): boolean;
            /** Defines whether the GameObject is active in the Scene.
            */
            public get activeInHierarchy(): boolean;
            /** Gets and sets the GameObject's StaticEditorFlags.
            */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this GameObject.
            */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of.
            */
            public get scene(): UnityEngine.SceneManagement.Scene;
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in.
            */
            public get sceneCullingMask(): bigint;
            public get gameObject(): UnityEngine.GameObject;
            /** Creates a GameObject with a primitive mesh renderer and appropriate collider.
            * @param type The type of primitive object to create.
            */
            public static CreatePrimitive ($type: UnityEngine.PrimitiveType) : UnityEngine.GameObject
            /** Returns the component of Type type if the GameObject has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: System.Type) : UnityEngine.Component
            /** Returns the component with name type if the GameObject has one attached, null if it doesn't.
            * @param type The type of Component to retrieve.
            */
            public GetComponent ($type: string) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
            * @param type The type of Component to retrieve.
            * @returns A component of the matching type, if found. 
            */
            public GetComponentInChildren ($type: System.Type) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type, $includeInactive: boolean) : UnityEngine.Component
            /** Retrieves the component of Type type in the GameObject or any of its parents.
            * @param type Type of component to find.
            * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
            */
            public GetComponentInParent ($type: System.Type) : UnityEngine.Component
            /** Returns all components of Type type in the GameObject.
            * @param type The type of component to retrieve.
            */
            public GetComponents ($type: System.Type) : System.Array$1<UnityEngine.Component>
            public GetComponents ($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>) : void
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its children children using depth first search. Works recursively.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should Components on inactive GameObjects be included in the found set?
            */
            public GetComponentsInChildren ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            public GetComponentsInParent ($type: System.Type) : System.Array$1<UnityEngine.Component>
            /** Returns all components of Type type in the GameObject or any of its parents.
            * @param type The type of Component to retrieve.
            * @param includeInactive Should inactive Components be included in the found set?
            */
            public GetComponentsInParent ($type: System.Type, $includeInactive: boolean) : System.Array$1<UnityEngine.Component>
            /** Gets the component of the specified type, if it exists.
            * @param type The type of component to retrieve.
            * @param component The output argument that will contain the component or null.
            * @returns Returns true if the component is found, false otherwise. 
            */
            public TryGetComponent ($type: System.Type, $component: $Ref<UnityEngine.Component>) : boolean
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found.
            * @param tag The tag to search for.
            */
            public static FindWithTag ($tag: string) : UnityEngine.GameObject
            public SendMessageUpwards ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public SendMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            public BroadcastMessage ($methodName: string, $options: UnityEngine.SendMessageOptions) : void
            /** Adds a component class of type componentType to the GameObject. C# Users can use a generic version.
            */
            public AddComponent ($componentType: System.Type) : UnityEngine.Component
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value.
            * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
            */
            public SetActive ($value: boolean) : void
            /** Is this GameObject tagged with tag ?
            * @param tag The tag to compare.
            */
            public CompareTag ($tag: string) : boolean
            public static FindGameObjectWithTag ($tag: string) : UnityEngine.GameObject
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found.
            * @param tag The name of the tag to search GameObjects for.
            */
            public static FindGameObjectsWithTag ($tag: string) : System.Array$1<UnityEngine.GameObject>
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject and on every ancestor of the behaviour.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessageUpwards ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string, $value: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject.
            * @param methodName The name of the method to call.
            * @param value An optional parameter value to pass to the called method.
            * @param options Should an error be raised if the method doesn't exist on the target object?
            */
            public SendMessage ($methodName: string) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string, $parameter: any) : void
            /** Calls the method named methodName on every MonoBehaviour in this GameObject or any of its children.
            */
            public BroadcastMessage ($methodName: string) : void
            /** Finds a GameObject by name and returns it.
            */
            public static Find ($name: string) : UnityEngine.GameObject
            public constructor ($name: string)
            public constructor ()
            public constructor ($name: string, ...components: System.Type[])
        }
        /** Options for how to send a message.
        */
        enum SendMessageOptions
        { RequireReceiver = 0, DontRequireReceiver = 1 }
        /** The various primitives that can be created using the GameObject.CreatePrimitive function.
        */
        enum PrimitiveType
        { Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        /** Bit mask that controls object destruction, saving and visibility in inspectors.
        */
        enum HideFlags
        { None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        /** Script interface for the Built-in Particle System. Unity's powerful and versatile particle system implementation.
        */
        class ParticleSystem extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Determines whether the Particle System is playing.
            */
            public get isPlaying(): boolean;
            /** Determines whether the Particle System is emitting particles. A Particle System may stop emitting when its emission module has finished, it has been paused or if the system has been stopped using ParticleSystem.Stop|Stop with the ParticleSystemStopBehavior.StopEmitting|StopEmitting flag. Resume emitting by calling ParticleSystem.Play|Play.
            */
            public get isEmitting(): boolean;
            /** Determines whether the Particle System is in the stopped state.
            */
            public get isStopped(): boolean;
            /** Determines whether the Particle System is paused.
            */
            public get isPaused(): boolean;
            /** The current number of particles (Read Only). The number doesn't include particles of child Particle Systems
            */
            public get particleCount(): number;
            /** Playback position in seconds.
            */
            public get time(): number;
            public set time(value: number);
            /** Total playback time in seconds, including the Start Delay setting.
            */
            public get totalTime(): number;
            /** Override the random seed used for the Particle System emission.
            */
            public get randomSeed(): number;
            public set randomSeed(value: number);
            /** Controls whether the Particle System uses an automatically-generated random number to seed the random number generator.
            */
            public get useAutoRandomSeed(): boolean;
            public set useAutoRandomSeed(value: boolean);
            /** Does this system support Procedural Simulation?
            */
            public get proceduralSimulationSupported(): boolean;
            /** Access the main Particle System settings.
            */
            public get main(): UnityEngine.ParticleSystem.MainModule;
            /** Script interface for the EmissionModule of a Particle System.
            */
            public get emission(): UnityEngine.ParticleSystem.EmissionModule;
            /** Script interface for the ShapeModule of a Particle System. 
            */
            public get shape(): UnityEngine.ParticleSystem.ShapeModule;
            /** Script interface for the VelocityOverLifetimeModule of a Particle System.
            */
            public get velocityOverLifetime(): UnityEngine.ParticleSystem.VelocityOverLifetimeModule;
            /** Script interface for the LimitVelocityOverLifetimeModule of a Particle System. .
            */
            public get limitVelocityOverLifetime(): UnityEngine.ParticleSystem.LimitVelocityOverLifetimeModule;
            /** Script interface for the InheritVelocityModule of a Particle System.
            */
            public get inheritVelocity(): UnityEngine.ParticleSystem.InheritVelocityModule;
            /** Script interface for the Particle System Lifetime By Emitter Speed module.
            */
            public get lifetimeByEmitterSpeed(): UnityEngine.ParticleSystem.LifetimeByEmitterSpeedModule;
            /** Script interface for the ForceOverLifetimeModule of a Particle System.
            */
            public get forceOverLifetime(): UnityEngine.ParticleSystem.ForceOverLifetimeModule;
            /** Script interface for the ColorOverLifetimeModule of a Particle System.
            */
            public get colorOverLifetime(): UnityEngine.ParticleSystem.ColorOverLifetimeModule;
            /** Script interface for the ColorByLifetimeModule of a Particle System.
            */
            public get colorBySpeed(): UnityEngine.ParticleSystem.ColorBySpeedModule;
            /** Script interface for the SizeOverLifetimeModule of a Particle System. 
            */
            public get sizeOverLifetime(): UnityEngine.ParticleSystem.SizeOverLifetimeModule;
            /** Script interface for the SizeBySpeedModule of a Particle System.
            */
            public get sizeBySpeed(): UnityEngine.ParticleSystem.SizeBySpeedModule;
            /** Script interface for the RotationOverLifetimeModule of a Particle System.
            */
            public get rotationOverLifetime(): UnityEngine.ParticleSystem.RotationOverLifetimeModule;
            /** Script interface for the RotationBySpeedModule of a Particle System.
            */
            public get rotationBySpeed(): UnityEngine.ParticleSystem.RotationBySpeedModule;
            /** Script interface for the ExternalForcesModule of a Particle System.
            */
            public get externalForces(): UnityEngine.ParticleSystem.ExternalForcesModule;
            /** Script interface for the NoiseModule of a Particle System.
            */
            public get noise(): UnityEngine.ParticleSystem.NoiseModule;
            /** Script interface for the CollisionModule of a Particle System.
            */
            public get collision(): UnityEngine.ParticleSystem.CollisionModule;
            /** Script interface for the TriggerModule of a Particle System.
            */
            public get trigger(): UnityEngine.ParticleSystem.TriggerModule;
            /** Script interface for the SubEmittersModule of a Particle System.
            */
            public get subEmitters(): UnityEngine.ParticleSystem.SubEmittersModule;
            /** Script interface for the TextureSheetAnimationModule of a Particle System.
            */
            public get textureSheetAnimation(): UnityEngine.ParticleSystem.TextureSheetAnimationModule;
            /** Script interface for the LightsModule of a Particle System.
            */
            public get lights(): UnityEngine.ParticleSystem.LightsModule;
            /** Script interface for the TrailsModule of a Particle System.
            */
            public get trails(): UnityEngine.ParticleSystem.TrailModule;
            /** Script interface for the CustomDataModule of a Particle System.
            */
            public get customData(): UnityEngine.ParticleSystem.CustomDataModule;
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : void
            public SetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : void
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: System.Array$1<UnityEngine.ParticleSystem.Particle>) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number, $offset: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>, $size: number) : number
            public GetParticles ($particles: Unity.Collections.NativeArray$1<UnityEngine.ParticleSystem.Particle>) : number
            public SetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : void
            public GetCustomParticleData ($customData: System.Collections.Generic.List$1<UnityEngine.Vector4>, $streamIndex: UnityEngine.ParticleSystemCustomData) : number
            public GetPlaybackState () : UnityEngine.ParticleSystem.PlaybackState
            public SetPlaybackState ($playbackState: UnityEngine.ParticleSystem.PlaybackState) : void
            public GetTrails () : UnityEngine.ParticleSystem.Trails
            public GetTrails ($trailData: $Ref<UnityEngine.ParticleSystem.Trails>) : number
            public SetTrails ($trailData: UnityEngine.ParticleSystem.Trails) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean, $fixedTimeStep: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean, $restart: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number, $withChildren: boolean) : void
            /** Fast-forwards the Particle System by simulating particles over the given period of time, then pauses it.
            * @param t Time period in seconds to advance the ParticleSystem simulation by. If restart is true, the ParticleSystem will be reset to 0 time, and then advanced by this value. If restart is false, the ParticleSystem simulation will be advanced in time from its current state by this value.
            * @param withChildren Fast-forward all child Particle Systems as well.
            * @param restart Restart and start from the beginning.
            * @param fixedTimeStep Only update the system at fixed intervals, based on the value in "Fixed Time" in the Time options.
            */
            public Simulate ($t: number) : void
            /** Starts the Particle System.
            * @param withChildren Play all child Particle Systems as well.
            */
            public Play ($withChildren: boolean) : void
            public Play () : void
            /** Pauses the system so no new particles are emitted and the existing particles are not updated.
            * @param withChildren Pause all child Particle Systems as well.
            */
            public Pause ($withChildren: boolean) : void
            public Pause () : void
            /** Stops playing the Particle System using the supplied stop behaviour.
            * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean, $stopBehavior: UnityEngine.ParticleSystemStopBehavior) : void
            /** Stops playing the Particle System using the supplied stop behaviour.
            * @param withChildren Stop all child Particle Systems as well.
            * @param stopBehavior Stop emitting or stop emitting and clear the system.
            */
            public Stop ($withChildren: boolean) : void
            public Stop () : void
            /** Remove all particles in the Particle System.
            * @param withChildren Clear all child Particle Systems as well.
            */
            public Clear ($withChildren: boolean) : void
            public Clear () : void
            /** Does the Particle System contain any live particles, or will it produce more?
            * @param withChildren Check all child Particle Systems as well.
            * @returns True if the Particle System contains live particles or is still creating new particles. False if the Particle System has stopped emitting particles and all particles are dead. 
            */
            public IsAlive ($withChildren: boolean) : boolean
            public IsAlive () : boolean
            /** Emit count particles immediately.
            * @param count Number of particles to emit.
            */
            public Emit ($count: number) : void
            public Emit ($emitParams: UnityEngine.ParticleSystem.EmitParams, $count: number) : void
            /** Triggers the specified sub emitter on all particles of the Particle System.
            * @param subEmitterIndex Index of the sub emitter to trigger.
            */
            public TriggerSubEmitter ($subEmitterIndex: number) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particle: $Ref<UnityEngine.ParticleSystem.Particle>) : void
            public TriggerSubEmitter ($subEmitterIndex: number, $particles: System.Collections.Generic.List$1<UnityEngine.ParticleSystem.Particle>) : void
            public static ResetPreMappedBufferMemory () : void
            /** Limits the amount of graphics memory Unity reserves for efficient rendering of Particle Systems.
            * @param vertexBuffersCount The maximum number of cached vertex buffers.
            * @param indexBuffersCount The maximum number of cached index buffers.
            */
            public static SetMaximumPreMappedBufferCounts ($vertexBuffersCount: number, $indexBuffersCount: number) : void
            public AllocateAxisOfRotationAttribute () : void
            public AllocateMeshIndexAttribute () : void
            /** Ensures that the ParticleSystemJobs.ParticleSystemJobData.customData1|customData1 and ParticleSystemJobs.ParticleSystemJobData.customData1|customData2 particle attribute arrays are allocated.
            * @param stream The custom data stream to allocate.
            */
            public AllocateCustomDataAttribute ($stream: UnityEngine.ParticleSystemCustomData) : void
            public constructor ()
        }
        /** Representation of RGBA colors in 32 bit format.
        */
        class Color32 extends System.ValueType implements System.IFormattable
        {
            protected [__keep_incompatibility]: never;
        }
        /** The space to simulate particles in.
        */
        enum ParticleSystemSimulationSpace
        { Local = 0, World = 1, Custom = 2 }
        /** Control how particle systems apply transform scale.
        */
        enum ParticleSystemScalingMode
        { Hierarchy = 0, Local = 1, Shape = 2 }
        /** Representation of four-dimensional vectors.
        */
        class Vector4 extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Vector4>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Which stream of custom particle data to set.
        */
        enum ParticleSystemCustomData
        { Custom1 = 0, Custom2 = 1 }
        /** The behavior to apply when calling ParticleSystem.Stop|Stop.
        */
        enum ParticleSystemStopBehavior
        { StopEmittingAndClear = 0, StopEmitting = 1 }
        /** Behaviours are Components that can be enabled or disabled.
        */
        class Behaviour extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
            /** Enabled Behaviours are Updated, disabled Behaviours are not.
            */
            public get enabled(): boolean;
            public set enabled(value: boolean);
            /** Reports whether a GameObject and its associated Behaviour is active and enabled.
            */
            public get isActiveAndEnabled(): boolean;
            public constructor ()
        }
        /** Element that can be used for screen rendering.
        */
        class Canvas extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Is the Canvas in World or Overlay mode?
            */
            public get renderMode(): UnityEngine.RenderMode;
            public set renderMode(value: UnityEngine.RenderMode);
            /** Is this the root Canvas?
            */
            public get isRootCanvas(): boolean;
            /** Get the render rect for the Canvas.
            */
            public get pixelRect(): UnityEngine.Rect;
            /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space.
            */
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            /** The number of pixels per unit that is considered the default.
            */
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases.
            */
            public get overridePixelPerfect(): boolean;
            public set overridePixelPerfect(value: boolean);
            /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space.
            */
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            /** How far away from the camera is the Canvas generated.
            */
            public get planeDistance(): number;
            public set planeDistance(value: number);
            /** The render order in which the canvas is being emitted to the Scene. (Read Only)
            */
            public get renderOrder(): number;
            /** Override the sorting of canvas.
            */
            public get overrideSorting(): boolean;
            public set overrideSorting(value: boolean);
            /** Canvas' order within a sorting layer.
            */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** For Overlay mode, display index on which the UI canvas will appear.
            */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Unique ID of the Canvas' sorting layer.
            */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Cached calculated value based upon SortingLayerID.
            */
            public get cachedSortingLayerValue(): number;
            /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh.
            */
            public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
            public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
            /** Name of the Canvas' sorting layer.
            */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself.
            */
            public get rootCanvas(): UnityEngine.Canvas;
            /** Returns the canvas display size based on the selected render mode and target display.
            */
            public get renderingDisplaySize(): UnityEngine.Vector2;
            /** Should the Canvas size be updated based on the render target when a manual Camera.Render call is performed.
            */
            public get updateRectTransformForStandalone(): UnityEngine.StandaloneRenderResize;
            public set updateRectTransformForStandalone(value: UnityEngine.StandaloneRenderResize);
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas].
            */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into.
            */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            public static add_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static remove_preWillRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static add_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static remove_willRenderCanvases ($value: UnityEngine.Canvas.WillRenderCanvases) : void
            public static GetDefaultCanvasMaterial () : UnityEngine.Material
            public static GetETC1SupportedCanvasMaterial () : UnityEngine.Material
            public static ForceUpdateCanvases () : void
            public constructor ()
        }
        /** RenderMode for the Canvas.
        */
        enum RenderMode
        { ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        /** A 2D Rectangle defined by X and Y position, width and height.
        */
        class Rect extends System.ValueType implements System.IFormattable, System.IEquatable$1<UnityEngine.Rect>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created.
        */
        enum AdditionalCanvasShaderChannels
        { None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        /** Enum used to determine if a Canvas should be resized when a manual Camera.Render call is performed.
        */
        enum StandaloneRenderResize
        { Enabled = 0, Disabled = 1 }
        /** A Camera is a device through which the player views the world.
        */
        class Camera extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** The material class.
        */
        class Material extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** MonoBehaviour is a base class that many Unity scripts derive from.
        */
        class MonoBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
            /** Cancellation token raised when the MonoBehaviour is destroyed (Read Only).
            */
            public get destroyCancellationToken(): System.Threading.CancellationToken;
            /** Disabling this lets you skip the GUI layout phase.
            */
            public get useGUILayout(): boolean;
            public set useGUILayout(value: boolean);
            /** Allow a specific instance of a MonoBehaviour to run in edit mode (only available in the editor).
            */
            public get runInEditMode(): boolean;
            public set runInEditMode(value: boolean);
            public IsInvoking () : boolean
            public CancelInvoke () : void
            /** Invokes the method methodName in time seconds.
            */
            public Invoke ($methodName: string, $time: number) : void
            /** Invokes the method methodName in time seconds, then repeatedly every repeatRate seconds.
            * @param methodName The name of a method to invoke.
            * @param time Start invoking after n seconds.
            * @param repeatRate Repeat every n seconds.
            */
            public InvokeRepeating ($methodName: string, $time: number, $repeatRate: number) : void
            /** Cancels all Invoke calls with name methodName on this behaviour.
            */
            public CancelInvoke ($methodName: string) : void
            /** Is any invoke on methodName pending?
            */
            public IsInvoking ($methodName: string) : boolean
            /** Starts a coroutine named methodName.
            */
            public StartCoroutine ($methodName: string) : UnityEngine.Coroutine
            /** Starts a coroutine named methodName.
            */
            public StartCoroutine ($methodName: string, $value: any) : UnityEngine.Coroutine
            /** Starts a Coroutine.
            */
            public StartCoroutine ($routine: System.Collections.IEnumerator) : UnityEngine.Coroutine
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: System.Collections.IEnumerator) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($routine: UnityEngine.Coroutine) : void
            /** Stops the first coroutine named methodName, or the coroutine stored in routine running on this behaviour.
            * @param methodName Name of coroutine.
            * @param routine Name of the function in code, including coroutines.
            */
            public StopCoroutine ($methodName: string) : void
            public StopAllCoroutines () : void
            /** Logs message to the Unity Console (identical to Debug.Log).
            */
            public static print ($message: any) : void
            public constructor ()
        }
        /** Base class for all yield instructions.
        */
        class YieldInstruction extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** MonoBehaviour.StartCoroutine returns a Coroutine. Instances of this class are only used to reference these coroutines, and do not hold any exposed properties or functions.
        */
        class Coroutine extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
        }
        /** Asynchronous operation coroutine.
        */
        class AsyncOperation extends UnityEngine.YieldInstruction
        {
            protected [__keep_incompatibility]: never;
            /** Has the operation finished? (Read Only)
            */
            public get isDone(): boolean;
            /** What's the operation's progress. (Read Only)
            */
            public get progress(): number;
            /** Priority lets you tweak in which order async operation calls will be performed.
            */
            public get priority(): number;
            public set priority(value: number);
            /** Allow Scenes to be activated as soon as it is ready.
            */
            public get allowSceneActivation(): boolean;
            public set allowSceneActivation(value: boolean);
            public add_completed ($value: System.Action$1<UnityEngine.AsyncOperation>) : void
            public remove_completed ($value: System.Action$1<UnityEngine.AsyncOperation>) : void
            public constructor ()
        }
        class AudioBehaviour extends UnityEngine.Behaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** A representation of audio sources in 3D.
        */
        class AudioSource extends UnityEngine.AudioBehaviour
        {
            protected [__keep_incompatibility]: never;
        }
        /** Base class for Texture handling.
        */
        class Texture extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Render textures are textures that can be rendered to.
        */
        class RenderTexture extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** Class that represents textures in C# code.
        */
        class Texture2D extends UnityEngine.Texture
        {
            protected [__keep_incompatibility]: never;
        }
        /** A base class of all colliders.
        */
        class Collider extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
        }
        /** Structure used to get information back from a raycast.
        */
        class RaycastHit extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** A mesh collider allows you to do between meshes and primitives.
        */
        class MeshCollider extends UnityEngine.Collider
        {
            protected [__keep_incompatibility]: never;
        }
        /** Store a collection of Keyframes that can be evaluated over time.
        */
        class AnimationCurve extends System.Object implements System.IEquatable$1<UnityEngine.AnimationCurve>
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents a Gradient used for animating colors.
        */
        class Gradient extends System.Object implements System.IEquatable$1<UnityEngine.Gradient>
        {
            protected [__keep_incompatibility]: never;
        }
        /** A container for audio data.
        */
        class AudioClip extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** A class to access the Mesh of the.
        */
        class MeshFilter extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
        }
        /** General functionality for all renderers.
        */
        class Renderer extends UnityEngine.Component
        {
            protected [__keep_incompatibility]: never;
        }
        /** Renders meshes inserted by the MeshFilter or TextMesh.
        */
        class MeshRenderer extends UnityEngine.Renderer
        {
            protected [__keep_incompatibility]: never;
        }
        /** A class that allows you to create or modify meshes.
        */
        class Mesh extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** A block of material values to apply.
        */
        class MaterialPropertyBlock extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Represents a Sprite object for use in 2D gameplay.
        */
        class Sprite extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Shader scripts used for all rendering.
        */
        class Shader extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Script interface for.
        */
        class Font extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
        /** Key codes returned by Event.keyCode. These map directly to a physical key on the keyboard. If "Use Physical Keys" is enabled in, these map directly to a physical key on the keyboard. If "Use Physical Keys" is disabled these map to language dependent mapping, different for every platform and cannot be guaranteed to work. "Use Physical Keys" is enabled by default from 2022.1
        */
        enum KeyCode
        { None = 0, Backspace = 8, Delete = 127, Tab = 9, Clear = 12, Return = 13, Pause = 19, Escape = 27, Space = 32, Keypad0 = 256, Keypad1 = 257, Keypad2 = 258, Keypad3 = 259, Keypad4 = 260, Keypad5 = 261, Keypad6 = 262, Keypad7 = 263, Keypad8 = 264, Keypad9 = 265, KeypadPeriod = 266, KeypadDivide = 267, KeypadMultiply = 268, KeypadMinus = 269, KeypadPlus = 270, KeypadEnter = 271, KeypadEquals = 272, UpArrow = 273, DownArrow = 274, RightArrow = 275, LeftArrow = 276, Insert = 277, Home = 278, End = 279, PageUp = 280, PageDown = 281, F1 = 282, F2 = 283, F3 = 284, F4 = 285, F5 = 286, F6 = 287, F7 = 288, F8 = 289, F9 = 290, F10 = 291, F11 = 292, F12 = 293, F13 = 294, F14 = 295, F15 = 296, Alpha0 = 48, Alpha1 = 49, Alpha2 = 50, Alpha3 = 51, Alpha4 = 52, Alpha5 = 53, Alpha6 = 54, Alpha7 = 55, Alpha8 = 56, Alpha9 = 57, Exclaim = 33, DoubleQuote = 34, Hash = 35, Dollar = 36, Percent = 37, Ampersand = 38, Quote = 39, LeftParen = 40, RightParen = 41, Asterisk = 42, Plus = 43, Comma = 44, Minus = 45, Period = 46, Slash = 47, Colon = 58, Semicolon = 59, Less = 60, Equals = 61, Greater = 62, Question = 63, At = 64, LeftBracket = 91, Backslash = 92, RightBracket = 93, Caret = 94, Underscore = 95, BackQuote = 96, A = 97, B = 98, C = 99, D = 100, E = 101, F = 102, G = 103, H = 104, I = 105, J = 106, K = 107, L = 108, M = 109, N = 110, O = 111, P = 112, Q = 113, R = 114, S = 115, T = 116, U = 117, V = 118, W = 119, X = 120, Y = 121, Z = 122, LeftCurlyBracket = 123, Pipe = 124, RightCurlyBracket = 125, Tilde = 126, Numlock = 300, CapsLock = 301, ScrollLock = 302, RightShift = 303, LeftShift = 304, RightControl = 305, LeftControl = 306, RightAlt = 307, LeftAlt = 308, LeftMeta = 310, LeftCommand = 310, LeftApple = 310, LeftWindows = 311, RightMeta = 309, RightCommand = 309, RightApple = 309, RightWindows = 312, AltGr = 313, Help = 315, Print = 316, SysReq = 317, Break = 318, Menu = 319, Mouse0 = 323, Mouse1 = 324, Mouse2 = 325, Mouse3 = 326, Mouse4 = 327, Mouse5 = 328, Mouse6 = 329, JoystickButton0 = 330, JoystickButton1 = 331, JoystickButton2 = 332, JoystickButton3 = 333, JoystickButton4 = 334, JoystickButton5 = 335, JoystickButton6 = 336, JoystickButton7 = 337, JoystickButton8 = 338, JoystickButton9 = 339, JoystickButton10 = 340, JoystickButton11 = 341, JoystickButton12 = 342, JoystickButton13 = 343, JoystickButton14 = 344, JoystickButton15 = 345, JoystickButton16 = 346, JoystickButton17 = 347, JoystickButton18 = 348, JoystickButton19 = 349, Joystick1Button0 = 350, Joystick1Button1 = 351, Joystick1Button2 = 352, Joystick1Button3 = 353, Joystick1Button4 = 354, Joystick1Button5 = 355, Joystick1Button6 = 356, Joystick1Button7 = 357, Joystick1Button8 = 358, Joystick1Button9 = 359, Joystick1Button10 = 360, Joystick1Button11 = 361, Joystick1Button12 = 362, Joystick1Button13 = 363, Joystick1Button14 = 364, Joystick1Button15 = 365, Joystick1Button16 = 366, Joystick1Button17 = 367, Joystick1Button18 = 368, Joystick1Button19 = 369, Joystick2Button0 = 370, Joystick2Button1 = 371, Joystick2Button2 = 372, Joystick2Button3 = 373, Joystick2Button4 = 374, Joystick2Button5 = 375, Joystick2Button6 = 376, Joystick2Button7 = 377, Joystick2Button8 = 378, Joystick2Button9 = 379, Joystick2Button10 = 380, Joystick2Button11 = 381, Joystick2Button12 = 382, Joystick2Button13 = 383, Joystick2Button14 = 384, Joystick2Button15 = 385, Joystick2Button16 = 386, Joystick2Button17 = 387, Joystick2Button18 = 388, Joystick2Button19 = 389, Joystick3Button0 = 390, Joystick3Button1 = 391, Joystick3Button2 = 392, Joystick3Button3 = 393, Joystick3Button4 = 394, Joystick3Button5 = 395, Joystick3Button6 = 396, Joystick3Button7 = 397, Joystick3Button8 = 398, Joystick3Button9 = 399, Joystick3Button10 = 400, Joystick3Button11 = 401, Joystick3Button12 = 402, Joystick3Button13 = 403, Joystick3Button14 = 404, Joystick3Button15 = 405, Joystick3Button16 = 406, Joystick3Button17 = 407, Joystick3Button18 = 408, Joystick3Button19 = 409, Joystick4Button0 = 410, Joystick4Button1 = 411, Joystick4Button2 = 412, Joystick4Button3 = 413, Joystick4Button4 = 414, Joystick4Button5 = 415, Joystick4Button6 = 416, Joystick4Button7 = 417, Joystick4Button8 = 418, Joystick4Button9 = 419, Joystick4Button10 = 420, Joystick4Button11 = 421, Joystick4Button12 = 422, Joystick4Button13 = 423, Joystick4Button14 = 424, Joystick4Button15 = 425, Joystick4Button16 = 426, Joystick4Button17 = 427, Joystick4Button18 = 428, Joystick4Button19 = 429, Joystick5Button0 = 430, Joystick5Button1 = 431, Joystick5Button2 = 432, Joystick5Button3 = 433, Joystick5Button4 = 434, Joystick5Button5 = 435, Joystick5Button6 = 436, Joystick5Button7 = 437, Joystick5Button8 = 438, Joystick5Button9 = 439, Joystick5Button10 = 440, Joystick5Button11 = 441, Joystick5Button12 = 442, Joystick5Button13 = 443, Joystick5Button14 = 444, Joystick5Button15 = 445, Joystick5Button16 = 446, Joystick5Button17 = 447, Joystick5Button18 = 448, Joystick5Button19 = 449, Joystick6Button0 = 450, Joystick6Button1 = 451, Joystick6Button2 = 452, Joystick6Button3 = 453, Joystick6Button4 = 454, Joystick6Button5 = 455, Joystick6Button6 = 456, Joystick6Button7 = 457, Joystick6Button8 = 458, Joystick6Button9 = 459, Joystick6Button10 = 460, Joystick6Button11 = 461, Joystick6Button12 = 462, Joystick6Button13 = 463, Joystick6Button14 = 464, Joystick6Button15 = 465, Joystick6Button16 = 466, Joystick6Button17 = 467, Joystick6Button18 = 468, Joystick6Button19 = 469, Joystick7Button0 = 470, Joystick7Button1 = 471, Joystick7Button2 = 472, Joystick7Button3 = 473, Joystick7Button4 = 474, Joystick7Button5 = 475, Joystick7Button6 = 476, Joystick7Button7 = 477, Joystick7Button8 = 478, Joystick7Button9 = 479, Joystick7Button10 = 480, Joystick7Button11 = 481, Joystick7Button12 = 482, Joystick7Button13 = 483, Joystick7Button14 = 484, Joystick7Button15 = 485, Joystick7Button16 = 486, Joystick7Button17 = 487, Joystick7Button18 = 488, Joystick7Button19 = 489, Joystick8Button0 = 490, Joystick8Button1 = 491, Joystick8Button2 = 492, Joystick8Button3 = 493, Joystick8Button4 = 494, Joystick8Button5 = 495, Joystick8Button6 = 496, Joystick8Button7 = 497, Joystick8Button8 = 498, Joystick8Button9 = 499, Joystick8Button10 = 500, Joystick8Button11 = 501, Joystick8Button12 = 502, Joystick8Button13 = 503, Joystick8Button14 = 504, Joystick8Button15 = 505, Joystick8Button16 = 506, Joystick8Button17 = 507, Joystick8Button18 = 508, Joystick8Button19 = 509 }
        /** Types of modifier key that can be active during a keystroke event.
        */
        enum EventModifiers
        { None = 0, Shift = 1, Control = 2, Alt = 4, Command = 8, Numeric = 16, CapsLock = 32, FunctionKey = 64 }
        /** AssetBundles let you stream additional assets via the UnityWebRequest class and instantiate them at runtime.
        */
        class AssetBundle extends UnityEngine.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.Generic {
        interface IEnumerable$1<T> extends System.Collections.IEnumerable
        {
        }
        class List$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
            public get Capacity(): number;
            public set Capacity(value: number);
            public get Count(): number;
            public get_Item ($index: number) : T
            public set_Item ($index: number, $value: T) : void
            public Add ($item: T) : void
            public AddRange ($collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public AsReadOnly () : System.Collections.ObjectModel.ReadOnlyCollection$1<T>
            public BinarySearch ($index: number, $count: number, $item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public BinarySearch ($item: T) : number
            public BinarySearch ($item: T, $comparer: System.Collections.Generic.IComparer$1<T>) : number
            public Clear () : void
            public Contains ($item: T) : boolean
            public CopyTo ($array: System.Array$1<T>) : void
            public CopyTo ($index: number, $array: System.Array$1<T>, $arrayIndex: number, $count: number) : void
            public CopyTo ($array: System.Array$1<T>, $arrayIndex: number) : void
            public Exists ($match: System.Predicate$1<T>) : boolean
            public Find ($match: System.Predicate$1<T>) : T
            public FindAll ($match: System.Predicate$1<T>) : System.Collections.Generic.List$1<T>
            public FindIndex ($match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public FindLast ($match: System.Predicate$1<T>) : T
            public FindLastIndex ($match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $match: System.Predicate$1<T>) : number
            public FindLastIndex ($startIndex: number, $count: number, $match: System.Predicate$1<T>) : number
            public ForEach ($action: System.Action$1<T>) : void
            public GetEnumerator () : System.Collections.Generic.List$1.Enumerator<T>
            public GetRange ($index: number, $count: number) : System.Collections.Generic.List$1<T>
            public IndexOf ($item: T) : number
            public IndexOf ($item: T, $index: number) : number
            public IndexOf ($item: T, $index: number, $count: number) : number
            public Insert ($index: number, $item: T) : void
            public InsertRange ($index: number, $collection: System.Collections.Generic.IEnumerable$1<T>) : void
            public LastIndexOf ($item: T) : number
            public LastIndexOf ($item: T, $index: number) : number
            public LastIndexOf ($item: T, $index: number, $count: number) : number
            public Remove ($item: T) : boolean
            public RemoveAll ($match: System.Predicate$1<T>) : number
            public RemoveAt ($index: number) : void
            public RemoveRange ($index: number, $count: number) : void
            public Reverse () : void
            public Reverse ($index: number, $count: number) : void
            public Sort () : void
            public Sort ($comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($index: number, $count: number, $comparer: System.Collections.Generic.IComparer$1<T>) : void
            public Sort ($comparison: System.Comparison$1<T>) : void
            public ToArray () : System.Array$1<T>
            public TrimExcess () : void
            public TrueForAll ($match: System.Predicate$1<T>) : boolean
            public constructor ()
            public constructor ($capacity: number)
            public constructor ($collection: System.Collections.Generic.IEnumerable$1<T>)
        }
        interface IReadOnlyList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>
        {
        }
        interface IReadOnlyCollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IList$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>
        {
        }
        interface ICollection$1<T> extends System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable
        {
        }
        interface IComparer$1<T>
        {
        }
        interface IEnumerator$1<T> extends System.Collections.IEnumerator, System.IDisposable
        {
        }
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
            protected [__keep_incompatibility]: never;
        }
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
        class KeyValuePair$2<TKey, TValue> extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDictionary$2<TKey, TValue> extends System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>
        {
        }
    }
    namespace System.Collections {
        interface IEnumerable
        {
        }
        interface IStructuralComparable
        {
        }
        interface IStructuralEquatable
        {
        }
        interface ICollection extends System.Collections.IEnumerable
        {
        }
        interface IList extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        interface IEnumerator
        {
        }
        interface IDictionary extends System.Collections.ICollection, System.Collections.IEnumerable
        {
        }
        class Hashtable extends System.Object implements System.Runtime.Serialization.IDeserializationCallback, System.ICloneable, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.IDictionary, System.Collections.IEnumerable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Runtime.Serialization {
        interface ISerializable
        {
        }
        class SerializationInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class StreamingContext extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        interface IDeserializationCallback
        {
        }
    }
    namespace System.Runtime.InteropServices {
        interface _Exception
        {
        }
        interface _MemberInfo
        {
        }
        interface _Type
        {
        }
        interface _MethodBase
        {
        }
        interface _MethodInfo
        {
        }
        interface _Assembly
        {
        }
        interface _Module
        {
        }
        interface _Attribute
        {
        }
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute
        {
            protected [__keep_incompatibility]: never;
        }
        interface _ConstructorInfo
        {
        }
        interface _EventInfo
        {
        }
        interface _FieldInfo
        {
        }
        interface _PropertyInfo
        {
        }
        interface _AssemblyName
        {
        }
    }
    namespace System.Collections.ObjectModel {
        class ReadOnlyCollection$1<T> extends System.Object implements System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Collections.Generic.List$1 {
        class Enumerator<T> extends System.ValueType implements System.Collections.Generic.IEnumerator$1<T>, System.Collections.IEnumerator, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace System.Reflection {
        class MemberInfo extends System.Object implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface ICustomAttributeProvider
        {
        }
        interface IReflect
        {
        }
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        interface MemberFilter
        { 
        (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean;
        }
        var MemberFilter: { new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter; }
        interface TypeFilter
        { 
        (m: System.Type, filterCriteria: any) : boolean; 
        Invoke?: (m: System.Type, filterCriteria: any) => boolean;
        }
        var TypeFilter: { new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter; }
        enum MemberTypes
        { Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        enum BindingFlags
        { Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216, DoNotWrapExceptions = 33554432 }
        class Assembly extends System.Object implements System.Runtime.Serialization.ISerializable, System.Reflection.ICustomAttributeProvider, System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly
        {
            protected [__keep_incompatibility]: never;
        }
        class Module extends System.Object implements System.Runtime.Serialization.ISerializable, System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        enum GenericParameterAttributes
        { None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        enum TypeAttributes
        { VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, RTSpecialName = 2048, HasSecurity = 262144, ReservedMask = 264192 }
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class Binder extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class ParameterModifier extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        enum CallingConventions
        { Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._FieldInfo
        {
            protected [__keep_incompatibility]: never;
        }
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo, System.Reflection.ICustomAttributeProvider
        {
            protected [__keep_incompatibility]: never;
        }
        class InterfaceMapping extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class AssemblyName extends System.Object implements System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.Serialization.ISerializable, System.ICloneable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file.
        */
        class Scene extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        /** Used when loading a Scene in a player.
        */
        enum LoadSceneMode
        { Single = 0, Additive = 1 }
    }
    namespace System.Security {
        interface IEvidenceFactory
        {
        }
    }
    namespace System.Globalization {
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.ParticleSystem {
        class Particle extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class PlaybackState extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class Trails extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class EmitParams extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class MainModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class EmissionModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ShapeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class VelocityOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LimitVelocityOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class InheritVelocityModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LifetimeByEmitterSpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ForceOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ColorOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ColorBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SizeOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SizeBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class RotationOverLifetimeModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class RotationBySpeedModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class ExternalForcesModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class NoiseModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class CollisionModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TriggerModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class SubEmittersModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TextureSheetAnimationModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class LightsModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class TrailModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
        class CustomDataModule extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace Unity.Collections {
        class NativeArray$1<T> extends System.ValueType implements System.Collections.Generic.IEnumerable$1<T>, System.Collections.IEnumerable, System.IDisposable, System.IEquatable$1<Unity.Collections.NativeArray$1<T>>
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Canvas {
        interface WillRenderCanvases
        { 
        () : void; 
        Invoke?: () => void;
        }
        var WillRenderCanvases: { new (func: () => void): WillRenderCanvases; }
    }
    namespace System.Threading {
        class CancellationToken extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
        }
    }
        class JsManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static JsOnApplicationQuit : System.Action
            public static JsOnDispose : System.Action
            public static JsOnApplicationFocus : System.Action$1<boolean>
            public static JsOnApplicationPause : System.Action$1<boolean>
            public static JSDoEvent : System.Action$2<string, any>
            public static Update () : void
            public static LateUpdate () : void
            public static StartGame () : void
            public static Restart () : void
            public static DispatchJSEvent ($eventName: string, $eventParam?: any) : void
            public static OnApplicationFocus ($statusParam: boolean) : void
            public static OnApplicationPause ($statusParam: boolean) : void
            public static OnApplicationQuit () : void
            public static Dispose () : void
        }
        class Dbg extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static IsDebugBuild : boolean
            public static Log ($message: any) : void
            public static LogColorDebug ($message: any, $color: UnityEngine.Color) : void
            public static LogColor ($message: any, $color: UnityEngine.Color) : void
            public static LogError ($message: any) : void
            public static LogException ($ex: System.Exception) : void
            public static LogWarning ($message: any) : void
            public static LogMemoryLog ($str: string) : void
        }
        class FUIHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static AddPackage ($packageName: string, $onFinished: System.Action) : void
            public static ReleasePackage ($packageName: string) : void
        }
        class XGameSetting extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get XResolution(): XGameSetting.EnumResolution;
            public static set XResolution(value: XGameSetting.EnumResolution);
            public static get XShake(): boolean;
            public static set XShake(value: boolean);
            public static get MusicVolume(): number;
            public static set MusicVolume(value: number);
            public static get AudioVolume(): number;
            public static set AudioVolume(value: number);
            public static Init () : void
            public static GetXResolution ($xResolution: XGameSetting.EnumResolution) : number
            public static RefreshGameResolutions ($xResolution: XGameSetting.EnumResolution) : void
            public constructor ()
        }
        class XResource extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static EDITOR_DOWNLOAD_SPEED : number
            public static Init () : void
            public static Load ($resource: string, $notify: System.Action$1<UnityEngine.Object>) : void
            public static LoadGameObject ($resource: string, $callback: System.Action$1<UnityEngine.GameObject>) : void
            public static LoadObjectAsync ($resource: string, $callBack: System.Action$1<UnityEngine.Object>) : System.Collections.IEnumerator
            public static LoadScene ($levelName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode, $onFinished?: System.Action$1<string>, $onProgress?: System.Action$2<string, number>) : void
            public static UnloadScene ($levelName: string) : void
            public static LoadSceneWait ($levelName: string, $mode: UnityEngine.SceneManagement.LoadSceneMode, $onFinished?: System.Action$1<string>, $onProgress?: System.Action$2<string, number>) : System.Collections.IEnumerator
            public static CacheTableZip ($onProgress: System.Action$2<string, number>) : System.Collections.IEnumerator
            public static LoadTableText ($path: string) : string
            public static LoadEditorAsset ($resourcePath: string) : UnityEngine.Object
            public static DoGc ($sec?: number) : System.Collections.IEnumerator
            public static LoadBytes ($fullPath: string, $callBack: System.Action$1<System.Array$1<number>>, $onError: System.Action) : void
            public static RequestBytes ($fullPath: string, $async: AsyncResource, $onError: System.Action, $onProgress: System.Action$1<number>) : System.Collections.IEnumerator
            public static LoadTextList ($fullPaths: System.Collections.Generic.List$1<string>, $callBack: System.Action$1<System.Collections.Generic.List$1<string>>) : void
            public static LoadTextListAsync ($fullPaths: System.Collections.Generic.List$1<string>, $callBack: System.Action$1<System.Collections.Generic.List$1<string>>) : System.Collections.IEnumerator
            public static LoadText ($fullPath: string, $callBack: System.Action$1<string>) : void
            public static RequestText ($fullPath: string, $async: AsyncResource) : System.Collections.IEnumerator
            public static RequestZipFile ($zipName: string, $callback: System.Action$1<ICSharpCode.SharpZipLib.Zip.ZipFile>, $onProgress: System.Action$1<number>) : System.Collections.IEnumerator
            public static GetTextFromZip ($zip: ICSharpCode.SharpZipLib.Zip.ZipFile, $resourcePath: string) : string
            public static SimulateDownload ($request: UnityEngine.Networking.UnityWebRequest, $onProgress: System.Action$1<number>) : System.Collections.IEnumerator
            public constructor ()
        }
        class AsyncResource extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        class XPlatform extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Platform : XPlatform.EPlatform
            public static get InEditor(): boolean;
            public static get InMobile(): boolean;
            public static Init ($useEditorAssetBundle: boolean) : System.Collections.IEnumerator
            public static GetPlatform () : string
            public constructor ()
        }
        class PauseHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get InPause(): boolean;
            public static SetPauseState ($state: EPauseFrom, $bPause: boolean) : void
            public static Revert () : void
            public static PauseGame ($from: EPauseFrom) : void
            public static DoContinueGame ($from: EPauseFrom) : void
        }
        enum EPauseFrom
        { None = 0 }
        class TimeScaleHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SetTimeScale ($from: ETimeScaleFrom, $value: number) : void
            public static ClearTimeScale ($from: ETimeScaleFrom) : void
            public static GetTimeScale () : number
            public static ResetTimeScale () : void
        }
        enum ETimeScaleFrom
        { Pause = 0, BulletTime = 1, Test1 = 2, Test2 = 3 }
        class Sound extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get GlobalMusicVolume(): number;
            public static set GlobalMusicVolume(value: number);
            public static get GlobalAudioVolume(): number;
            public static set GlobalAudioVolume(value: number);
            public static get CurrentMusicId(): number;
            public static Init () : void
            public static CloseSound () : void
            public static OpenSound () : void
            public static Create3DAudioSource ($parent: UnityEngine.GameObject, $maxDistance?: number, $useLinear?: boolean) : UnityEngine.AudioSource
            public static Create2DAudioSource ($parent: UnityEngine.GameObject) : UnityEngine.AudioSource
            public static Load ($id: number, $notify: System.Action$1<SoundClip>) : void
            public static StopEnvironmentMusic ($fade?: number) : void
            public static PlayEnvironmentMusic ($id: number, $loop?: boolean, $fade?: number) : void
            public static PlayEnvironmentMusic ($resource: string, $loop?: boolean, $volume?: number, $fade?: number) : void
            public static PauseMusic ($b: boolean) : void
            public static PlayMusic ($id: number, $loop?: boolean, $tag?: string) : void
            public static PlayMusic ($resource: string, $name?: string, $loop?: boolean, $volume?: number) : void
            public static StopMusic () : void
            public static PlayMusic2 ($id: number, $loop?: boolean) : void
            public static PlayMusic2 ($resource: string, $loop?: boolean, $volume?: number) : void
            public static StopMusic2 () : void
            public static PauseMusic2 ($b: boolean) : void
            public static UnloadSoundAsset ($audioSource: UnityEngine.AudioSource, $soundId: number) : void
            public static PlayAudioOneShot ($audioSource: UnityEngine.AudioSource, $soundId: number, $volume?: number) : void
            public static PlayAudio ($audioSource: UnityEngine.AudioSource, $soundId: number, $bLoop?: boolean, $playCallBack?: System.Action) : void
            public static StopAudio ($audioSource: UnityEngine.AudioSource) : void
            public static PlayUIAudioOneShot ($id: UISoundId) : void
            public static PlayUiAudioOneShot ($soundId: number) : void
            public static ClearSoundCache () : void
            public static ClearAll () : void
        }
        class SoundClip extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
        enum UISoundId
        {  }
        class MissionCache extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static MonsterMaterials : System.Collections.Generic.List$1<MissionCache.MonsterMaterialInfo>
            public static PreloadMission ($onFinished: System.Action) : void
            public static ClearCache () : void
        }
        namespace XGameSetting {
        enum EnumResolution
        { Low = 0, Mid = 1, High = 2 }
    }
    namespace ICSharpCode.SharpZipLib.Zip {
        class ZipFile extends System.Object implements System.Collections.IEnumerable, System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace UnityEngine.Networking {
        /** Provides methods to communicate with web servers.
        */
        class UnityWebRequest extends System.Object implements System.IDisposable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace XPlatform {
        enum EPlatform
        { UnityEditor = 1, UnityEditor_AB = 2, Standalone = 3, Android = 4, Ios = 5, WebGL = 6 }
    }
    namespace MissionCache {
        class MonsterMaterialInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace FairyGUI {
        class BlendModeUtils extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Factors : System.Array$1<FairyGUI.BlendModeUtils.BlendFactor>
            public static Apply ($mat: UnityEngine.Material, $blendMode: FairyGUI.BlendMode) : void
            public static Override ($blendMode: FairyGUI.BlendMode, $srcFactor: UnityEngine.Rendering.BlendMode, $dstFactor: UnityEngine.Rendering.BlendMode) : void
            public constructor ()
        }
        enum BlendMode
        { Normal = 0, None = 1, Add = 2, Multiply = 3, Screen = 4, Erase = 5, Mask = 6, Below = 7, Off = 8, One_OneMinusSrcAlpha = 9, Custom1 = 10, Custom2 = 11, Custom3 = 12 }
        class CaptureCamera extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public cachedTransform : UnityEngine.Transform
            public cachedCamera : UnityEngine.Camera
            public static Name : string
            public static LayerName : string
            public static HiddenLayerName : string
            public static get layer(): number;
            public static get hiddenLayer(): number;
            public static CheckMain () : void
            public static CreateRenderTexture ($width: number, $height: number, $stencilSupport: boolean) : UnityEngine.RenderTexture
            public static Capture ($target: FairyGUI.DisplayObject, $texture: UnityEngine.RenderTexture, $contentHeight: number, $offset: UnityEngine.Vector2) : void
            public constructor ()
        }
        class EventDispatcher extends System.Object implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public AddEventListener ($strType: string, $callback: FairyGUI.EventCallback1) : void
            public AddEventListener ($strType: string, $callback: FairyGUI.EventCallback0) : void
            public RemoveEventListener ($strType: string, $callback: FairyGUI.EventCallback1) : void
            public RemoveEventListener ($strType: string, $callback: FairyGUI.EventCallback0) : void
            public AddCapture ($strType: string, $callback: FairyGUI.EventCallback1) : void
            public RemoveCapture ($strType: string, $callback: FairyGUI.EventCallback1) : void
            public RemoveEventListeners () : void
            public RemoveEventListeners ($strType: string) : void
            public hasEventListeners ($strType: string) : boolean
            public isDispatching ($strType: string) : boolean
            public DispatchEvent ($strType: string) : boolean
            public DispatchEvent ($strType: string, $data: any) : boolean
            public DispatchEvent ($strType: string, $data: any, $initiator: any) : boolean
            public DispatchEvent ($context: FairyGUI.EventContext) : boolean
            public BubbleEvent ($strType: string, $data: any) : boolean
            public BroadcastEvent ($strType: string, $data: any) : boolean
            public constructor ()
        }
        interface IEventDispatcher
        {
            AddEventListener ($strType: string, $callback: FairyGUI.EventCallback0) : void
            AddEventListener ($strType: string, $callback: FairyGUI.EventCallback1) : void
            RemoveEventListener ($strType: string, $callback: FairyGUI.EventCallback0) : void
            RemoveEventListener ($strType: string, $callback: FairyGUI.EventCallback1) : void
            DispatchEvent ($context: FairyGUI.EventContext) : boolean
            DispatchEvent ($strType: string) : boolean
            DispatchEvent ($strType: string, $data: any) : boolean
            DispatchEvent ($strType: string, $data: any, $initiator: any) : boolean
        }
        class DisplayObject extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public gOwner : FairyGUI.GObject
            public id : number
            public get parent(): FairyGUI.Container;
            public get gameObject(): UnityEngine.GameObject;
            public get cachedTransform(): UnityEngine.Transform;
            public get graphics(): FairyGUI.NGraphics;
            public get paintingGraphics(): FairyGUI.NGraphics;
            public get onClick(): FairyGUI.EventListener;
            public get onRightClick(): FairyGUI.EventListener;
            public get onTouchBegin(): FairyGUI.EventListener;
            public get onTouchMove(): FairyGUI.EventListener;
            public get onTouchEnd(): FairyGUI.EventListener;
            public get onRollOver(): FairyGUI.EventListener;
            public get onRollOut(): FairyGUI.EventListener;
            public get onMouseWheel(): FairyGUI.EventListener;
            public get onAddedToStage(): FairyGUI.EventListener;
            public get onRemovedFromStage(): FairyGUI.EventListener;
            public get onKeyDown(): FairyGUI.EventListener;
            public get onClickLink(): FairyGUI.EventListener;
            public get onFocusIn(): FairyGUI.EventListener;
            public get onFocusOut(): FairyGUI.EventListener;
            public get alpha(): number;
            public set alpha(value: number);
            public get grayed(): boolean;
            public set grayed(value: boolean);
            public get visible(): boolean;
            public set visible(value: boolean);
            public get x(): number;
            public set x(value: number);
            public get y(): number;
            public set y(value: number);
            public get z(): number;
            public set z(value: number);
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            public get width(): number;
            public set width(value: number);
            public get height(): number;
            public set height(value: number);
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            public get scaleX(): number;
            public set scaleX(value: number);
            public get scaleY(): number;
            public set scaleY(value: number);
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            public get rotation(): number;
            public set rotation(value: number);
            public get rotationX(): number;
            public set rotationX(value: number);
            public get rotationY(): number;
            public set rotationY(value: number);
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            public get perspective(): boolean;
            public set perspective(value: boolean);
            public get focalLength(): number;
            public set focalLength(value: number);
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            public get location(): UnityEngine.Vector3;
            public set location(value: UnityEngine.Vector3);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get shader(): string;
            public set shader(value: string);
            public get renderingOrder(): number;
            public set renderingOrder(value: number);
            public get layer(): number;
            public set layer(value: number);
            public get focusable(): boolean;
            public set focusable(value: boolean);
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            public get focused(): boolean;
            public get cursor(): string;
            public set cursor(value: string);
            public get isDisposed(): boolean;
            public get topmost(): FairyGUI.Container;
            public get stage(): FairyGUI.Stage;
            public get worldSpaceContainer(): FairyGUI.Container;
            public get touchable(): boolean;
            public set touchable(value: boolean);
            public get touchDisabled(): boolean;
            public get paintingMode(): boolean;
            public get cacheAsBitmap(): boolean;
            public set cacheAsBitmap(value: boolean);
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            public get home(): UnityEngine.Transform;
            public set home(value: UnityEngine.Transform);
            public add_onPaint ($value: System.Action) : void
            public remove_onPaint ($value: System.Action) : void
            public SetXY ($xv: number, $yv: number) : void
            public SetPosition ($xv: number, $yv: number, $zv: number) : void
            public SetSize ($wv: number, $hv: number) : void
            public EnsureSizeCorrect () : void
            public SetScale ($xv: number, $yv: number) : void
            public EnterPaintingMode () : void
            public EnterPaintingMode ($requestorId: number, $extend: FairyGUI.Margin | null) : void
            public EnterPaintingMode ($requestorId: number, $extend: FairyGUI.Margin | null, $scale: number) : void
            public LeavePaintingMode ($requestorId: number) : void
            public GetScreenShot ($extend: FairyGUI.Margin | null, $scale: number) : UnityEngine.Texture2D
            public GetBounds ($targetSpace: FairyGUI.DisplayObject) : UnityEngine.Rect
            public GlobalToLocal ($point: UnityEngine.Vector2) : UnityEngine.Vector2
            public LocalToGlobal ($point: UnityEngine.Vector2) : UnityEngine.Vector2
            public WorldToLocal ($worldPoint: UnityEngine.Vector3, $direction: UnityEngine.Vector3) : UnityEngine.Vector3
            public LocalToWorld ($localPoint: UnityEngine.Vector3) : UnityEngine.Vector3
            public TransformPoint ($point: UnityEngine.Vector2, $targetSpace: FairyGUI.DisplayObject) : UnityEngine.Vector2
            public TransformRect ($rect: UnityEngine.Rect, $targetSpace: FairyGUI.DisplayObject) : UnityEngine.Rect
            public RemoveFromParent () : void
            public InvalidateBatchingState () : void
            public Update ($context: FairyGUI.UpdateContext) : void
            public Dispose () : void
            public constructor ()
        }
        class Container extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public renderMode : UnityEngine.RenderMode
            public renderCamera : UnityEngine.Camera
            public opaque : boolean
            public clipSoftness : UnityEngine.Vector4 | null
            public hitArea : FairyGUI.IHitTest
            public touchChildren : boolean
            public reversedMask : boolean
            public get numChildren(): number;
            public get clipRect(): UnityEngine.Rect | null;
            public set clipRect(value: UnityEngine.Rect | null);
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            public add_onUpdate ($value: System.Action) : void
            public remove_onUpdate ($value: System.Action) : void
            public AddChild ($child: FairyGUI.DisplayObject) : FairyGUI.DisplayObject
            public AddChildAt ($child: FairyGUI.DisplayObject, $index: number) : FairyGUI.DisplayObject
            public Contains ($child: FairyGUI.DisplayObject) : boolean
            public GetChildAt ($index: number) : FairyGUI.DisplayObject
            public GetChild ($name: string) : FairyGUI.DisplayObject
            public GetChildren () : System.Array$1<FairyGUI.DisplayObject>
            public GetChildIndex ($child: FairyGUI.DisplayObject) : number
            public RemoveChild ($child: FairyGUI.DisplayObject) : FairyGUI.DisplayObject
            public RemoveChild ($child: FairyGUI.DisplayObject, $dispose: boolean) : FairyGUI.DisplayObject
            public RemoveChildAt ($index: number) : FairyGUI.DisplayObject
            public RemoveChildAt ($index: number, $dispose: boolean) : FairyGUI.DisplayObject
            public RemoveChildren () : void
            public RemoveChildren ($beginIndex: number, $endIndex: number, $dispose: boolean) : void
            public SetChildIndex ($child: FairyGUI.DisplayObject, $index: number) : void
            public SwapChildren ($child1: FairyGUI.DisplayObject, $child2: FairyGUI.DisplayObject) : void
            public SwapChildrenAt ($index1: number, $index2: number) : void
            public ChangeChildrenOrder ($indice: System.Collections.Generic.IList$1<number>, $objs: System.Collections.Generic.IList$1<FairyGUI.DisplayObject>) : void
            public GetDescendants ($backward: boolean) : System.Collections.Generic.IEnumerator$1<FairyGUI.DisplayObject>
            public CreateGraphics () : void
            public GetRenderCamera () : UnityEngine.Camera
            public HitTest ($stagePoint: UnityEngine.Vector2, $forTouch: boolean) : FairyGUI.DisplayObject
            public IsAncestorOf ($obj: FairyGUI.DisplayObject) : boolean
            public InvalidateBatchingState ($childrenChanged: boolean) : void
            public SetChildrenLayer ($value: number) : void
            public constructor ()
            public constructor ($gameObjectName: string)
            public constructor ($attachTarget: UnityEngine.GameObject)
            public InvalidateBatchingState () : void
        }
        interface IHitTest
        {
            HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class UpdateContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public clipped : boolean
            public clipInfo : FairyGUI.UpdateContext.ClipInfo
            public renderingOrder : number
            public batchingDepth : number
            public rectMaskDepth : number
            public stencilReferenceValue : number
            public stencilCompareValue : number
            public alpha : number
            public grayed : boolean
            public static current : FairyGUI.UpdateContext
            public static working : boolean
            public static add_OnBegin ($value: System.Action) : void
            public static remove_OnBegin ($value: System.Action) : void
            public static add_OnEnd ($value: System.Action) : void
            public static remove_OnEnd ($value: System.Action) : void
            public Begin () : void
            public End () : void
            public EnterClipping ($clipId: number, $clipRect: UnityEngine.Rect, $softness: UnityEngine.Vector4 | null) : void
            public EnterClipping ($clipId: number, $reversedMask: boolean) : void
            public LeaveClipping () : void
            public EnterPaintingMode () : void
            public LeavePaintingMode () : void
            public ApplyClippingProperties ($mat: UnityEngine.Material, $isStdMaterial: boolean) : void
            public ApplyAlphaMaskProperties ($mat: UnityEngine.Material, $erasing: boolean) : void
            public constructor ()
        }
        class GObject extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public data : any
            public sourceWidth : number
            public sourceHeight : number
            public initWidth : number
            public initHeight : number
            public minWidth : number
            public maxWidth : number
            public minHeight : number
            public maxHeight : number
            public dragBounds : UnityEngine.Rect | null
            public packageItem : FairyGUI.PackageItem
            public get id(): string;
            public get relations(): FairyGUI.Relations;
            public get parent(): FairyGUI.GComponent;
            public get displayObject(): FairyGUI.DisplayObject;
            public static get draggingObject(): FairyGUI.GObject;
            public get onClick(): FairyGUI.EventListener;
            public get onRightClick(): FairyGUI.EventListener;
            public get onTouchBegin(): FairyGUI.EventListener;
            public get onTouchMove(): FairyGUI.EventListener;
            public get onTouchEnd(): FairyGUI.EventListener;
            public get onRollOver(): FairyGUI.EventListener;
            public get onRollOut(): FairyGUI.EventListener;
            public get onAddedToStage(): FairyGUI.EventListener;
            public get onRemovedFromStage(): FairyGUI.EventListener;
            public get onKeyDown(): FairyGUI.EventListener;
            public get onClickLink(): FairyGUI.EventListener;
            public get onPositionChanged(): FairyGUI.EventListener;
            public get onSizeChanged(): FairyGUI.EventListener;
            public get onDragStart(): FairyGUI.EventListener;
            public get onDragMove(): FairyGUI.EventListener;
            public get onDragEnd(): FairyGUI.EventListener;
            public get onGearStop(): FairyGUI.EventListener;
            public get onFocusIn(): FairyGUI.EventListener;
            public get onFocusOut(): FairyGUI.EventListener;
            public get x(): number;
            public set x(value: number);
            public get y(): number;
            public set y(value: number);
            public get z(): number;
            public set z(value: number);
            public get xy(): UnityEngine.Vector2;
            public set xy(value: UnityEngine.Vector2);
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            public get width(): number;
            public set width(value: number);
            public get height(): number;
            public set height(value: number);
            public get size(): UnityEngine.Vector2;
            public set size(value: UnityEngine.Vector2);
            public get actualWidth(): number;
            public get actualHeight(): number;
            public get xMin(): number;
            public set xMin(value: number);
            public get yMin(): number;
            public set yMin(value: number);
            public get scaleX(): number;
            public set scaleX(value: number);
            public get scaleY(): number;
            public set scaleY(value: number);
            public get scale(): UnityEngine.Vector2;
            public set scale(value: UnityEngine.Vector2);
            public get skew(): UnityEngine.Vector2;
            public set skew(value: UnityEngine.Vector2);
            public get pivotX(): number;
            public set pivotX(value: number);
            public get pivotY(): number;
            public set pivotY(value: number);
            public get pivot(): UnityEngine.Vector2;
            public set pivot(value: UnityEngine.Vector2);
            public get pivotAsAnchor(): boolean;
            public set pivotAsAnchor(value: boolean);
            public get touchable(): boolean;
            public set touchable(value: boolean);
            public get grayed(): boolean;
            public set grayed(value: boolean);
            public get enabled(): boolean;
            public set enabled(value: boolean);
            public get rotation(): number;
            public set rotation(value: number);
            public get rotationX(): number;
            public set rotationX(value: number);
            public get rotationY(): number;
            public set rotationY(value: number);
            public get alpha(): number;
            public set alpha(value: number);
            public get visible(): boolean;
            public set visible(value: boolean);
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            public get focusable(): boolean;
            public set focusable(value: boolean);
            public get tabStop(): boolean;
            public set tabStop(value: boolean);
            public get focused(): boolean;
            public get tooltips(): string;
            public set tooltips(value: string);
            public get cursor(): string;
            public set cursor(value: string);
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            public get gameObjectName(): string;
            public set gameObjectName(value: string);
            public get inContainer(): boolean;
            public get onStage(): boolean;
            public get resourceURL(): string;
            public get gearXY(): FairyGUI.GearXY;
            public get gearSize(): FairyGUI.GearSize;
            public get gearLook(): FairyGUI.GearLook;
            public get group(): FairyGUI.GGroup;
            public set group(value: FairyGUI.GGroup);
            public get root(): FairyGUI.GRoot;
            public get text(): string;
            public set text(value: string);
            public get icon(): string;
            public set icon(value: string);
            public get draggable(): boolean;
            public set draggable(value: boolean);
            public get dragging(): boolean;
            public get isDisposed(): boolean;
            public get asImage(): FairyGUI.GImage;
            public get asCom(): FairyGUI.GComponent;
            public get asButton(): FairyGUI.GButton;
            public get asLabel(): FairyGUI.GLabel;
            public get asProgress(): FairyGUI.GProgressBar;
            public get asSlider(): FairyGUI.GSlider;
            public get asComboBox(): FairyGUI.GComboBox;
            public get asTextField(): FairyGUI.GTextField;
            public get asRichTextField(): FairyGUI.GRichTextField;
            public get asTextInput(): FairyGUI.GTextInput;
            public get asLoader(): FairyGUI.GLoader;
            public get asLoader3D(): FairyGUI.GLoader3D;
            public get asList(): FairyGUI.GList;
            public get asGraph(): FairyGUI.GGraph;
            public get asGroup(): FairyGUI.GGroup;
            public get asMovieClip(): FairyGUI.GMovieClip;
            public get asTree(): FairyGUI.GTree;
            public get treeNode(): FairyGUI.GTreeNode;
            public SetXY ($xv: number, $yv: number) : void
            public SetXY ($xv: number, $yv: number, $topLeftValue: boolean) : void
            public SetPosition ($xv: number, $yv: number, $zv: number) : void
            public Center () : void
            public Center ($restraint: boolean) : void
            public MakeFullScreen () : void
            public SetSize ($wv: number, $hv: number) : void
            public SetSize ($wv: number, $hv: number, $ignorePivot: boolean) : void
            public SetScale ($wv: number, $hv: number) : void
            public SetPivot ($xv: number, $yv: number) : void
            public SetPivot ($xv: number, $yv: number, $asAnchor: boolean) : void
            public RequestFocus () : void
            public RequestFocus ($byKey: boolean) : void
            public SetHome ($obj: FairyGUI.GObject) : void
            public GetGear ($index: number) : FairyGUI.GearBase
            public InvalidateBatchingState () : void
            public HandleControllerChanged ($c: FairyGUI.Controller) : void
            public AddRelation ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType) : void
            public AddRelation ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean) : void
            public RemoveRelation ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType) : void
            public RemoveFromParent () : void
            public StartDrag () : void
            public StartDrag ($touchId: number) : void
            public StopDrag () : void
            public LocalToGlobal ($pt: UnityEngine.Vector2) : UnityEngine.Vector2
            public GlobalToLocal ($pt: UnityEngine.Vector2) : UnityEngine.Vector2
            public LocalToGlobal ($rect: UnityEngine.Rect) : UnityEngine.Rect
            public GlobalToLocal ($rect: UnityEngine.Rect) : UnityEngine.Rect
            public LocalToRoot ($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot) : UnityEngine.Vector2
            public RootToLocal ($pt: UnityEngine.Vector2, $r: FairyGUI.GRoot) : UnityEngine.Vector2
            public WorldToLocal ($pt: UnityEngine.Vector3) : UnityEngine.Vector2
            public WorldToLocal ($pt: UnityEngine.Vector3, $camera: UnityEngine.Camera) : UnityEngine.Vector2
            public TransformPoint ($pt: UnityEngine.Vector2, $targetSpace: FairyGUI.GObject) : UnityEngine.Vector2
            public TransformRect ($rect: UnityEngine.Rect, $targetSpace: FairyGUI.GObject) : UnityEngine.Rect
            public Dispose () : void
            public ConstructFromResource () : void
            public Setup_BeforeAdd ($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number) : void
            public Setup_AfterAdd ($buffer: FairyGUI.Utils.ByteBuffer, $beginPos: number) : void
            public TweenMove ($endValue: UnityEngine.Vector2, $duration: number) : FairyGUI.GTweener
            public TweenMoveX ($endValue: number, $duration: number) : FairyGUI.GTweener
            public TweenMoveY ($endValue: number, $duration: number) : FairyGUI.GTweener
            public TweenScale ($endValue: UnityEngine.Vector2, $duration: number) : FairyGUI.GTweener
            public TweenScaleX ($endValue: number, $duration: number) : FairyGUI.GTweener
            public TweenScaleY ($endValue: number, $duration: number) : FairyGUI.GTweener
            public TweenResize ($endValue: UnityEngine.Vector2, $duration: number) : FairyGUI.GTweener
            public TweenFade ($endValue: number, $duration: number) : FairyGUI.GTweener
            public TweenRotate ($endValue: number, $duration: number) : FairyGUI.GTweener
            public constructor ()
        }
        class NGraphics extends System.Object implements FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public blendMode : FairyGUI.BlendMode
            public dontClip : boolean
            public get gameObject(): UnityEngine.GameObject;
            public get meshFilter(): UnityEngine.MeshFilter;
            public get meshRenderer(): UnityEngine.MeshRenderer;
            public get mesh(): UnityEngine.Mesh;
            public get meshFactory(): FairyGUI.IMeshFactory;
            public set meshFactory(value: FairyGUI.IMeshFactory);
            public get contentRect(): UnityEngine.Rect;
            public set contentRect(value: UnityEngine.Rect);
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            public get shader(): string;
            public set shader(value: string);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get materialKeywords(): System.Array$1<string>;
            public set materialKeywords(value: System.Array$1<string>);
            public get enabled(): boolean;
            public set enabled(value: boolean);
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get vertexMatrix(): FairyGUI.NGraphics.VertexMatrix;
            public set vertexMatrix(value: FairyGUI.NGraphics.VertexMatrix);
            public get materialPropertyBlock(): UnityEngine.MaterialPropertyBlock;
            public add_meshModifier ($value: System.Action) : void
            public remove_meshModifier ($value: System.Action) : void
            public SetShaderAndTexture ($shader: string, $texture: FairyGUI.NTexture) : void
            public SetMaterial ($material: UnityEngine.Material) : void
            public ToggleKeyword ($keyword: string, $enabled: boolean) : void
            public Tint () : void
            public SetMeshDirty () : void
            public UpdateMesh () : boolean
            public Dispose () : void
            public Update ($context: FairyGUI.UpdateContext, $alpha: number, $grayed: boolean) : void
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ($gameObject: UnityEngine.GameObject)
            public constructor ()
        }
        interface IMeshFactory
        {
            OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
        }
        class EventListener extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get type(): string;
            public get isEmpty(): boolean;
            public get isDispatching(): boolean;
            public AddCapture ($callback: FairyGUI.EventCallback1) : void
            public RemoveCapture ($callback: FairyGUI.EventCallback1) : void
            public Add ($callback: FairyGUI.EventCallback1) : void
            public Remove ($callback: FairyGUI.EventCallback1) : void
            public Add ($callback: FairyGUI.EventCallback0) : void
            public Remove ($callback: FairyGUI.EventCallback0) : void
            public Set ($callback: FairyGUI.EventCallback1) : void
            public Set ($callback: FairyGUI.EventCallback0) : void
            public Clear () : void
            public Call () : boolean
            public Call ($data: any) : boolean
            public BubbleCall ($data: any) : boolean
            public BubbleCall () : boolean
            public BroadcastCall ($data: any) : boolean
            public BroadcastCall () : boolean
            public constructor ($owner: FairyGUI.EventDispatcher, $type: string)
            public constructor ()
        }
        class Stage extends FairyGUI.Container implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get soundVolume(): number;
            public set soundVolume(value: number);
            public static get inst(): FairyGUI.Stage;
            public static get touchScreen(): boolean;
            public static set touchScreen(value: boolean);
            public static get keyboardInput(): boolean;
            public static set keyboardInput(value: boolean);
            public static get isTouchOnUI(): boolean;
            public static get devicePixelRatio(): number;
            public static set devicePixelRatio(value: number);
            public get onStageResized(): FairyGUI.EventListener;
            public get touchTarget(): FairyGUI.DisplayObject;
            public get focus(): FairyGUI.DisplayObject;
            public set focus(value: FairyGUI.DisplayObject);
            public get touchPosition(): UnityEngine.Vector2;
            public get touchCount(): number;
            public get keyboard(): FairyGUI.IKeyboard;
            public set keyboard(value: FairyGUI.IKeyboard);
            public get activeCursor(): string;
            public add_beforeUpdate ($value: System.Action) : void
            public remove_beforeUpdate ($value: System.Action) : void
            public add_afterUpdate ($value: System.Action) : void
            public remove_afterUpdate ($value: System.Action) : void
            public static Instantiate () : void
            public SetFocus ($newFocus: FairyGUI.DisplayObject, $byKey?: boolean) : void
            public DoKeyNavigate ($backward: boolean) : void
            public GetTouchPosition ($touchId: number) : UnityEngine.Vector2
            public GetTouchTarget ($touchId: number) : FairyGUI.DisplayObject
            public GetAllTouch ($result: System.Array$1<number>) : System.Array$1<number>
            public ResetInputState () : void
            public CancelClick ($touchId: number) : void
            public EnableSound () : void
            public DisableSound () : void
            public PlayOneShotSound ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
            public PlayOneShotSound ($clip: UnityEngine.AudioClip) : void
            public OpenKeyboard ($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean) : void
            public CloseKeyboard () : void
            public InputString ($value: string) : void
            public SetCustomInput ($screenPos: UnityEngine.Vector2, $buttonDown: boolean) : void
            public SetCustomInput ($screenPos: UnityEngine.Vector2, $buttonDown: boolean, $buttonUp: boolean) : void
            public SetCustomInput ($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean) : void
            public SetCustomInput ($hit: $Ref<UnityEngine.RaycastHit>, $buttonDown: boolean, $buttonUp: boolean) : void
            public ForceUpdate () : void
            public ApplyPanelOrder ($target: FairyGUI.Container) : void
            public SortWorldSpacePanelsByZOrder ($panelSortingOrder: number) : void
            public MonitorTexture ($texture: FairyGUI.NTexture) : void
            public AddTouchMonitor ($touchId: number, $target: FairyGUI.EventDispatcher) : void
            public RemoveTouchMonitor ($target: FairyGUI.EventDispatcher) : void
            public IsTouchMonitoring ($target: FairyGUI.EventDispatcher) : boolean
            public RegisterCursor ($cursorName: string, $texture: UnityEngine.Texture2D, $hotspot: UnityEngine.Vector2) : void
            public constructor ()
        }
        class Margin extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public left : number
            public right : number
            public top : number
            public bottom : number
        }
        interface IFilter
        {
            target : FairyGUI.DisplayObject
            Update () : void
            Dispose () : void
        }
        class DisplayObjectInfo extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public displayObject : FairyGUI.DisplayObject
            public constructor ()
        }
        class GoWrapper extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public customCloneMaterials : System.Action$1<System.Collections.Generic.Dictionary$2<UnityEngine.Material, UnityEngine.Material>>
            public customRecoverMaterials : System.Action
            public get wrapTarget(): UnityEngine.GameObject;
            public set wrapTarget(value: UnityEngine.GameObject);
            public get renderingOrder(): number;
            public set renderingOrder(value: number);
            public add_onUpdate ($value: System.Action$1<FairyGUI.UpdateContext>) : void
            public remove_onUpdate ($value: System.Action$1<FairyGUI.UpdateContext>) : void
            public SetWrapTarget ($target: UnityEngine.GameObject, $cloneMaterial: boolean) : void
            public CacheRenderers () : void
            public constructor ()
            public constructor ($go: UnityEngine.GameObject)
        }
        class ColliderHitTest extends System.Object implements FairyGUI.IHitTest
        {
            protected [__keep_incompatibility]: never;
            public collider : UnityEngine.Collider
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
            public constructor ()
        }
        class HitTestContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static screenPoint : UnityEngine.Vector3
            public static worldPoint : UnityEngine.Vector3
            public static direction : UnityEngine.Vector3
            public static forTouch : boolean
            public static camera : UnityEngine.Camera
            public static layerMask : number
            public static maxDistance : number
            public static cachedMainCamera : UnityEngine.Camera
            public static GetRaycastHitFromCache ($camera: UnityEngine.Camera, $hit: $Ref<UnityEngine.RaycastHit>) : boolean
            public static CacheRaycastHit ($camera: UnityEngine.Camera, $hit: $Ref<UnityEngine.RaycastHit>) : void
            public static ClearRaycastHitCache () : void
            public constructor ()
        }
        class MeshColliderHitTest extends FairyGUI.ColliderHitTest implements FairyGUI.IHitTest
        {
            protected [__keep_incompatibility]: never;
            public lastHit : UnityEngine.Vector2
            public constructor ($collider: UnityEngine.MeshCollider)
            public constructor ()
        }
        class PixelHitTestData extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public pixelWidth : number
            public scale : number
            public pixels : System.Array$1<number>
            public pixelsLength : number
            public pixelsOffset : number
            public Load ($ba: FairyGUI.Utils.ByteBuffer) : void
            public constructor ()
        }
        class PixelHitTest extends System.Object implements FairyGUI.IHitTest
        {
            protected [__keep_incompatibility]: never;
            public offsetX : number
            public offsetY : number
            public sourceWidth : number
            public sourceHeight : number
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
            public constructor ($data: FairyGUI.PixelHitTestData, $offsetX: number, $offsetY: number, $sourceWidth: number, $sourceHeight: number)
            public constructor ()
        }
        class RectHitTest extends System.Object implements FairyGUI.IHitTest
        {
            protected [__keep_incompatibility]: never;
            public rect : UnityEngine.Rect
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
            public constructor ()
        }
        class ShapeHitTest extends System.Object implements FairyGUI.IHitTest
        {
            protected [__keep_incompatibility]: never;
            public shape : FairyGUI.DisplayObject
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
            public constructor ($obj: FairyGUI.DisplayObject)
            public constructor ()
        }
        class Image extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            public get textureScale(): UnityEngine.Vector2;
            public set textureScale(value: UnityEngine.Vector2);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            public get fillAmount(): number;
            public set fillAmount(value: number);
            public get scale9Grid(): UnityEngine.Rect | null;
            public set scale9Grid(value: UnityEngine.Rect | null);
            public get scaleByTile(): boolean;
            public set scaleByTile(value: boolean);
            public get tileGridIndice(): number;
            public set tileGridIndice(value: number);
            public SetNativeSize () : void
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public SliceFill ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
            public constructor ($texture: FairyGUI.NTexture)
        }
        class NTexture extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public uvRect : UnityEngine.Rect
            public rotated : boolean
            public refCount : number
            public lastActive : number
            public destroyMethod : FairyGUI.DestroyMethod
            public static get Empty(): FairyGUI.NTexture;
            public get width(): number;
            public get height(): number;
            public get offset(): UnityEngine.Vector2;
            public set offset(value: UnityEngine.Vector2);
            public get originalSize(): UnityEngine.Vector2;
            public set originalSize(value: UnityEngine.Vector2);
            public get root(): FairyGUI.NTexture;
            public get disposed(): boolean;
            public get nativeTexture(): UnityEngine.Texture;
            public get alphaTexture(): UnityEngine.Texture;
            public static add_CustomDestroyMethod ($value: System.Action$1<UnityEngine.Texture>) : void
            public static remove_CustomDestroyMethod ($value: System.Action$1<UnityEngine.Texture>) : void
            public add_onSizeChanged ($value: System.Action$1<FairyGUI.NTexture>) : void
            public remove_onSizeChanged ($value: System.Action$1<FairyGUI.NTexture>) : void
            public add_onRelease ($value: System.Action$1<FairyGUI.NTexture>) : void
            public remove_onRelease ($value: System.Action$1<FairyGUI.NTexture>) : void
            public static DisposeEmpty () : void
            public GetDrawRect ($drawRect: UnityEngine.Rect) : UnityEngine.Rect
            public GetUV ($uv: System.Array$1<UnityEngine.Vector2>) : void
            public GetMaterialManager ($shaderName: string) : FairyGUI.MaterialManager
            public Unload () : void
            public Unload ($destroyMaterials: boolean) : void
            public Reload ($nativeTexture: UnityEngine.Texture, $alphaTexture: UnityEngine.Texture) : void
            public AddRef () : void
            public ReleaseRef () : void
            public Dispose () : void
            public constructor ($texture: UnityEngine.Texture)
            public constructor ($texture: UnityEngine.Texture, $alphaTexture: UnityEngine.Texture, $xScale: number, $yScale: number)
            public constructor ($texture: UnityEngine.Texture, $region: UnityEngine.Rect)
            public constructor ($root: FairyGUI.NTexture, $region: UnityEngine.Rect, $rotated: boolean)
            public constructor ($root: FairyGUI.NTexture, $region: UnityEngine.Rect, $rotated: boolean, $originalSize: UnityEngine.Vector2, $offset: UnityEngine.Vector2)
            public constructor ($sprite: UnityEngine.Sprite)
            public constructor ()
        }
        enum FillMethod
        { None = 0, Horizontal = 1, Vertical = 2, Radial90 = 3, Radial180 = 4, Radial360 = 5 }
        class VertexBuffer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public contentRect : UnityEngine.Rect
            public uvRect : UnityEngine.Rect
            public vertexColor : UnityEngine.Color32
            public textureSize : UnityEngine.Vector2
            public vertices : System.Collections.Generic.List$1<UnityEngine.Vector3>
            public colors : System.Collections.Generic.List$1<UnityEngine.Color32>
            public uvs : System.Collections.Generic.List$1<UnityEngine.Vector2>
            public uvs2 : System.Collections.Generic.List$1<UnityEngine.Vector2>
            public triangles : System.Collections.Generic.List$1<number>
            public static NormalizedUV : System.Array$1<UnityEngine.Vector2>
            public static NormalizedPosition : System.Array$1<UnityEngine.Vector2>
            public get currentVertCount(): number;
            public static Begin () : FairyGUI.VertexBuffer
            public static Begin ($source: FairyGUI.VertexBuffer) : FairyGUI.VertexBuffer
            public End () : void
            public Clear () : void
            public AddVert ($position: UnityEngine.Vector3) : void
            public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32) : void
            public AddVert ($position: UnityEngine.Vector3, $color: UnityEngine.Color32, $uv: UnityEngine.Vector2) : void
            public AddQuad ($vertRect: UnityEngine.Rect) : void
            public AddQuad ($vertRect: UnityEngine.Rect, $color: UnityEngine.Color32) : void
            public AddQuad ($vertRect: UnityEngine.Rect, $color: UnityEngine.Color32, $uvRect: UnityEngine.Rect) : void
            public RepeatColors ($value: System.Array$1<UnityEngine.Color32>, $startIndex: number, $count: number) : void
            public AddTriangle ($idx0: number, $idx1: number, $idx2: number) : void
            public AddTriangles ($idxList: System.Array$1<number>, $startVertexIndex?: number) : void
            public AddTriangles ($startVertexIndex?: number) : void
            public GetPosition ($index: number) : UnityEngine.Vector3
            public GetUVAtPosition ($position: UnityEngine.Vector2, $usePercent: boolean) : UnityEngine.Vector2
            public Append ($vb: FairyGUI.VertexBuffer) : void
            public Insert ($vb: FairyGUI.VertexBuffer) : void
        }
        class MaterialManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public firstMaterialInFrame : boolean
            public add_onCreateNewMaterial ($value: System.Action$1<UnityEngine.Material>) : void
            public remove_onCreateNewMaterial ($value: System.Action$1<UnityEngine.Material>) : void
            public GetFlagsByKeywords ($keywords: System.Collections.Generic.IList$1<string>) : number
            public GetMaterial ($flags: number, $blendMode: FairyGUI.BlendMode, $group: number) : UnityEngine.Material
            public DestroyMaterials () : void
            public RefreshMaterials () : void
        }
        class CompositeMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public elements : System.Collections.Generic.List$1<FairyGUI.IMeshFactory>
            public activeIndex : number
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class EllipseMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public drawRect : UnityEngine.Rect | null
            public lineWidth : number
            public lineColor : UnityEngine.Color32
            public centerColor : UnityEngine.Color32 | null
            public fillColor : UnityEngine.Color32 | null
            public startDegree : number
            public endDegreee : number
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class FillMesh extends System.Object implements FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public method : FairyGUI.FillMethod
            public origin : number
            public amount : number
            public clockwise : boolean
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
        }
        class LineMesh extends System.Object implements FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public path : FairyGUI.GPath
            public lineWidth : number
            public lineWidthCurve : UnityEngine.AnimationCurve
            public gradient : UnityEngine.Gradient
            public roundEdge : boolean
            public fillStart : number
            public fillEnd : number
            public pointDensity : number
            public repeatFill : boolean
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
        }
        class GPath extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get length(): number;
            public get segmentCount(): number;
            public Create ($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint) : void
            public Create ($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint, $pt3: FairyGUI.GPathPoint) : void
            public Create ($pt1: FairyGUI.GPathPoint, $pt2: FairyGUI.GPathPoint, $pt3: FairyGUI.GPathPoint, $pt4: FairyGUI.GPathPoint) : void
            public Create ($points: System.Collections.Generic.IEnumerable$1<FairyGUI.GPathPoint>) : void
            public Clear () : void
            public GetPointAt ($t: number) : UnityEngine.Vector3
            public GetSegmentLength ($segmentIndex: number) : number
            public GetPointsInSegment ($segmentIndex: number, $t0: number, $t1: number, $points: System.Collections.Generic.List$1<UnityEngine.Vector3>, $ts?: System.Collections.Generic.List$1<number>, $pointDensity?: number) : void
            public GetAllPoints ($points: System.Collections.Generic.List$1<UnityEngine.Vector3>, $pointDensity?: number) : void
            public constructor ()
        }
        class PlaneMesh extends System.Object implements FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public gridSize : number
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
        }
        class PolygonMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public points : System.Collections.Generic.List$1<UnityEngine.Vector2>
            public texcoords : System.Collections.Generic.List$1<UnityEngine.Vector2>
            public lineWidth : number
            public lineColor : UnityEngine.Color32
            public fillColor : UnityEngine.Color32 | null
            public colors : System.Array$1<UnityEngine.Color32>
            public usePercentPositions : boolean
            public Add ($point: UnityEngine.Vector2) : void
            public Add ($point: UnityEngine.Vector2, $texcoord: UnityEngine.Vector2) : void
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class RectMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public drawRect : UnityEngine.Rect | null
            public lineWidth : number
            public lineColor : UnityEngine.Color32
            public fillColor : UnityEngine.Color32 | null
            public colors : System.Array$1<UnityEngine.Color32>
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class RegularPolygonMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public drawRect : UnityEngine.Rect | null
            public sides : number
            public lineWidth : number
            public lineColor : UnityEngine.Color32
            public centerColor : UnityEngine.Color32 | null
            public fillColor : UnityEngine.Color32 | null
            public distances : System.Array$1<number>
            public rotation : number
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class RoundedRectMesh extends System.Object implements FairyGUI.IHitTest, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public drawRect : UnityEngine.Rect | null
            public lineWidth : number
            public lineColor : UnityEngine.Color32
            public fillColor : UnityEngine.Color32 | null
            public topLeftRadius : number
            public topRightRadius : number
            public bottomLeftRadius : number
            public bottomRightRadius : number
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public HitTest ($contentRect: UnityEngine.Rect, $point: UnityEngine.Vector2) : boolean
            public constructor ()
            public HitTest ($contentRect: UnityEngine.Rect, $localPoint: UnityEngine.Vector2) : boolean
        }
        class StraightLineMesh extends System.Object implements FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public color : UnityEngine.Color
            public origin : UnityEngine.Vector3
            public end : UnityEngine.Vector3
            public lineWidth : number
            public repeatFill : boolean
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
            public constructor ($lineWidth: number, $color: UnityEngine.Color, $repeatFill: boolean)
        }
        class MovieClip extends FairyGUI.Image implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public interval : number
            public swing : boolean
            public repeatDelay : number
            public timeScale : number
            public ignoreEngineTimeScale : boolean
            public get onPlayEnd(): FairyGUI.EventListener;
            public get frames(): System.Array$1<FairyGUI.MovieClip.Frame>;
            public set frames(value: System.Array$1<FairyGUI.MovieClip.Frame>);
            public get playing(): boolean;
            public set playing(value: boolean);
            public get frame(): number;
            public set frame(value: number);
            public Rewind () : void
            public SyncStatus ($anotherMc: FairyGUI.MovieClip) : void
            public Advance ($time: number) : void
            public SetPlaySettings () : void
            public SetPlaySettings ($start: number, $end: number, $times: number, $endAt: number) : void
            public constructor ()
        }
        class NAudioClip extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CustomDestroyMethod : System.Action$1<UnityEngine.AudioClip>
            public destroyMethod : FairyGUI.DestroyMethod
            public nativeClip : UnityEngine.AudioClip
            public Unload () : void
            public Reload ($audioClip: UnityEngine.AudioClip) : void
            public constructor ($audioClip: UnityEngine.AudioClip)
            public constructor ()
        }
        enum DestroyMethod
        { Destroy = 0, Unload = 1, None = 2, ReleaseTemp = 3, Custom = 4 }
        enum FlipType
        { None = 0, Horizontal = 1, Vertical = 2, Both = 3 }
        class ShaderConfig extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Get : FairyGUI.ShaderConfig.GetFunction
            public static imageShader : string
            public static textShader : string
            public static bmFontShader : string
            public static TMPFontShader : string
            public static ID_ClipBox : number
            public static ID_ClipSoftness : number
            public static ID_AlphaTex : number
            public static ID_StencilComp : number
            public static ID_Stencil : number
            public static ID_StencilOp : number
            public static ID_StencilReadMask : number
            public static ID_ColorMask : number
            public static ID_ColorMatrix : number
            public static ID_ColorOffset : number
            public static ID_BlendSrcFactor : number
            public static ID_BlendDstFactor : number
            public static ID_ColorOption : number
            public static ID_Stencil2 : number
            public static GetShader ($name: string) : UnityEngine.Shader
        }
        class Shape extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get isEmpty(): boolean;
            public DrawRect ($lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color) : void
            public DrawRect ($lineSize: number, $colors: System.Array$1<UnityEngine.Color32>) : void
            public DrawRoundRect ($lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $topLeftRadius: number, $topRightRadius: number, $bottomLeftRadius: number, $bottomRightRadius: number) : void
            public DrawEllipse ($fillColor: UnityEngine.Color) : void
            public DrawEllipse ($lineSize: number, $centerColor: UnityEngine.Color, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $startDegree: number, $endDegree: number) : void
            public DrawPolygon ($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color) : void
            public DrawPolygon ($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $colors: System.Array$1<UnityEngine.Color32>) : void
            public DrawPolygon ($points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color, $lineSize: number, $lineColor: UnityEngine.Color) : void
            public DrawRegularPolygon ($sides: number, $lineSize: number, $centerColor: UnityEngine.Color, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color, $rotation: number, $distances: System.Array$1<number>) : void
            public Clear () : void
            public constructor ()
        }
        interface IKeyboard
        {
            done : boolean
            supportsCaret : boolean
            GetInput () : string
            Open ($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean) : void
            Close () : void
        }
        class StageCamera extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public constantSize : boolean
            public unitsPerPixel : number
            public cachedTransform : UnityEngine.Transform
            public cachedCamera : UnityEngine.Camera
            public static main : UnityEngine.Camera
            public static screenSizeVer : number
            public static Name : string
            public static LayerName : string
            public static DefaultCameraSize : number
            public static DefaultUnitsPerPixel : number
            public ApplyModifiedProperties () : void
            public static CheckMainCamera () : void
            public static CheckCaptureCamera () : void
            public static CreateCamera ($name: string, $cullingMask: number) : UnityEngine.Camera
            public constructor ()
        }
        class StageEngine extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public ObjectsOnStage : number
            public GraphicsOnStage : number
            public static beingQuit : boolean
            public constructor ()
        }
        class Stats extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ObjectCount : number
            public static GraphicsCount : number
            public static LatestObjectCreation : number
            public static LatestGraphicsCreation : number
            public constructor ()
        }
        class BaseFont extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public mainTexture : FairyGUI.NTexture
            public canTint : boolean
            public customBold : boolean
            public customBoldAndItalic : boolean
            public customOutline : boolean
            public shader : string
            public keepCrisp : boolean
            public version : number
            public UpdateGraphics ($graphics: FairyGUI.NGraphics) : void
            public SetFormat ($format: FairyGUI.TextFormat, $fontSizeScale: number) : void
            public PrepareCharacters ($text: string) : void
            public GetGlyph ($ch: number, $width: $Ref<number>, $height: $Ref<number>, $baseline: $Ref<number>) : boolean
            public DrawGlyph ($x: number, $y: number, $vertList: System.Collections.Generic.List$1<UnityEngine.Vector3>, $uvList: System.Collections.Generic.List$1<UnityEngine.Vector2>, $uv2List: System.Collections.Generic.List$1<UnityEngine.Vector2>, $colList: System.Collections.Generic.List$1<UnityEngine.Color32>) : number
            public DrawLine ($x: number, $y: number, $width: number, $fontSize: number, $type: number, $vertList: System.Collections.Generic.List$1<UnityEngine.Vector3>, $uvList: System.Collections.Generic.List$1<UnityEngine.Vector2>, $uv2List: System.Collections.Generic.List$1<UnityEngine.Vector2>, $colList: System.Collections.Generic.List$1<UnityEngine.Color32>) : number
            public HasCharacter ($ch: number) : boolean
            public GetLineHeight ($size: number) : number
            public Dispose () : void
            public constructor ()
        }
        class TextFormat extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public size : number
            public font : string
            public color : UnityEngine.Color
            public lineSpacing : number
            public letterSpacing : number
            public bold : boolean
            public underline : boolean
            public italic : boolean
            public strikethrough : boolean
            public gradientColor : System.Array$1<UnityEngine.Color32>
            public align : FairyGUI.AlignType
            public specialStyle : FairyGUI.TextFormat.SpecialStyle
            public outline : number
            public outlineColor : UnityEngine.Color
            public shadowOffset : UnityEngine.Vector2
            public shadowColor : UnityEngine.Color
            public SetColor ($value: number) : void
            public EqualStyle ($aFormat: FairyGUI.TextFormat) : boolean
            public CopyFrom ($source: FairyGUI.TextFormat) : void
            public FillVertexColors ($vertexColors: System.Array$1<UnityEngine.Color32>) : void
            public constructor ()
        }
        class BitmapFont extends FairyGUI.BaseFont
        {
            protected [__keep_incompatibility]: never;
            public size : number
            public resizable : boolean
            public hasChannel : boolean
            public AddChar ($ch: number, $glyph: FairyGUI.BitmapFont.BMGlyph) : void
            public constructor ()
        }
        class DynamicFont extends FairyGUI.BaseFont
        {
            protected [__keep_incompatibility]: never;
            public get nativeFont(): UnityEngine.Font;
            public set nativeFont(value: UnityEngine.Font);
            public constructor ()
            public constructor ($name: string, $font: UnityEngine.Font)
        }
        class Emoji extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public url : string
            public width : number
            public height : number
            public constructor ($url: string, $width: number, $height: number)
            public constructor ($url: string)
            public constructor ()
        }
        class FontManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static sFontFactory : System.Collections.Generic.Dictionary$2<string, FairyGUI.BaseFont>
            public static RegisterFont ($font: FairyGUI.BaseFont, $alias?: string) : void
            public static UnregisterFont ($font: FairyGUI.BaseFont) : void
            public static GetFont ($name: string) : FairyGUI.BaseFont
            public static Clear () : void
            public constructor ()
        }
        class RichTextField extends FairyGUI.Container implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get htmlPageContext(): FairyGUI.Utils.IHtmlPageContext;
            public set htmlPageContext(value: FairyGUI.Utils.IHtmlPageContext);
            public get htmlParseOptions(): FairyGUI.Utils.HtmlParseOptions;
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            public get textField(): FairyGUI.TextField;
            public get text(): string;
            public set text(value: string);
            public get htmlText(): string;
            public set htmlText(value: string);
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            public get htmlElementCount(): number;
            public GetHtmlElement ($name: string) : FairyGUI.Utils.HtmlElement
            public GetHtmlElementAt ($index: number) : FairyGUI.Utils.HtmlElement
            public ShowHtmlObject ($index: number, $show: boolean) : void
            public constructor ()
        }
        class InputTextField extends FairyGUI.RichTextField implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public static onCopy : System.Action$2<FairyGUI.InputTextField, string>
            public static onPaste : System.Action$1<FairyGUI.InputTextField>
            public static contextMenu : FairyGUI.PopupMenu
            public get maxLength(): number;
            public set maxLength(value: number);
            public get keyboardInput(): boolean;
            public set keyboardInput(value: boolean);
            public get keyboardType(): number;
            public set keyboardType(value: number);
            public get hideInput(): boolean;
            public set hideInput(value: boolean);
            public get disableIME(): boolean;
            public set disableIME(value: boolean);
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            public get onChanged(): FairyGUI.EventListener;
            public get onSubmit(): FairyGUI.EventListener;
            public get text(): string;
            public set text(value: string);
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            public get restrict(): string;
            public set restrict(value: string);
            public get caretPosition(): number;
            public set caretPosition(value: number);
            public get selectionBeginIndex(): number;
            public get selectionEndIndex(): number;
            public get promptText(): string;
            public set promptText(value: string);
            public get displayAsPassword(): boolean;
            public set displayAsPassword(value: boolean);
            public get editable(): boolean;
            public set editable(value: boolean);
            public get border(): number;
            public set border(value: number);
            public get corner(): number;
            public set corner(value: number);
            public get borderColor(): UnityEngine.Color;
            public set borderColor(value: UnityEngine.Color);
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            public SetSelection ($start: number, $length: number) : void
            public ReplaceSelection ($value: string) : void
            public ReplaceText ($value: string) : void
            public GetSelection () : string
            public constructor ()
        }
        class PopupMenu extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public visibleItemCount : number
            public hideOnClickItem : boolean
            public autoSize : boolean
            public get onPopup(): FairyGUI.EventListener;
            public get onClose(): FairyGUI.EventListener;
            public get itemCount(): number;
            public get contentPane(): FairyGUI.GComponent;
            public get list(): FairyGUI.GList;
            public AddItem ($caption: string, $callback: FairyGUI.EventCallback0) : FairyGUI.GButton
            public AddItem ($caption: string, $callback: FairyGUI.EventCallback1) : FairyGUI.GButton
            public AddItemAt ($caption: string, $index: number, $callback: FairyGUI.EventCallback1) : FairyGUI.GButton
            public AddItemAt ($caption: string, $index: number, $callback: FairyGUI.EventCallback0) : FairyGUI.GButton
            public AddSeperator () : void
            public AddSeperator ($index: number) : void
            public GetItemName ($index: number) : string
            public SetItemText ($name: string, $caption: string) : void
            public SetItemVisible ($name: string, $visible: boolean) : void
            public SetItemGrayed ($name: string, $grayed: boolean) : void
            public SetItemCheckable ($name: string, $checkable: boolean) : void
            public SetItemChecked ($name: string, $check: boolean) : void
            public IsItemChecked ($name: string) : boolean
            public RemoveItem ($name: string) : void
            public ClearItems () : void
            public Dispose () : void
            public Show () : void
            public Show ($target: FairyGUI.GObject) : void
            public Show ($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection) : void
            public Show ($target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $parentMenu: FairyGUI.PopupMenu) : void
            public Hide () : void
            public constructor ()
            public constructor ($resourceURL: string)
        }
        class TextField extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            public get text(): string;
            public set text(value: string);
            public get htmlText(): string;
            public set htmlText(value: string);
            public get parsedText(): string;
            public get autoSize(): FairyGUI.AutoSizeType;
            public set autoSize(value: FairyGUI.AutoSizeType);
            public get wordWrap(): boolean;
            public set wordWrap(value: boolean);
            public get singleLine(): boolean;
            public set singleLine(value: boolean);
            public get stroke(): number;
            public set stroke(value: number);
            public get strokeColor(): UnityEngine.Color;
            public set strokeColor(value: UnityEngine.Color);
            public get shadowOffset(): UnityEngine.Vector2;
            public set shadowOffset(value: UnityEngine.Vector2);
            public get textWidth(): number;
            public get textHeight(): number;
            public get maxWidth(): number;
            public set maxWidth(value: number);
            public get htmlElements(): System.Collections.Generic.List$1<FairyGUI.Utils.HtmlElement>;
            public get lines(): System.Collections.Generic.List$1<FairyGUI.TextField.LineInfo>;
            public get charPositions(): System.Collections.Generic.List$1<FairyGUI.TextField.CharPosition>;
            public get richTextField(): FairyGUI.RichTextField;
            public EnableCharPositionSupport () : void
            public ApplyFormat () : void
            public Redraw () : boolean
            public HasCharacter ($ch: number) : boolean
            public GetLinesShape ($startLine: number, $startCharX: number, $endLine: number, $endCharX: number, $clipped: boolean, $resultRects: System.Collections.Generic.List$1<UnityEngine.Rect>) : void
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
        }
        class RTLSupport extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static BaseDirection : FairyGUI.RTLSupport.DirectionType
            public static IsArabicLetter ($ch: number) : boolean
            public static ConvertNumber ($strNumber: string) : string
            public static ContainsArabicLetters ($text: string) : boolean
            public static DetectTextDirection ($text: string) : FairyGUI.RTLSupport.DirectionType
            public static DoMapping ($input: string) : string
            public static ConvertLineL ($source: string) : string
            public static ConvertLineR ($source: string) : string
            public constructor ()
        }
        class SelectionShape extends FairyGUI.DisplayObject implements FairyGUI.IEventDispatcher, FairyGUI.IMeshFactory
        {
            protected [__keep_incompatibility]: never;
            public rects : System.Collections.Generic.List$1<UnityEngine.Rect>
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public Refresh () : void
            public Clear () : void
            public OnPopulateMesh ($vb: FairyGUI.VertexBuffer) : void
            public constructor ()
        }
        enum AlignType
        { Left = 0, Center = 1, Right = 2 }
        enum VertAlignType
        { Top = 0, Middle = 1, Bottom = 2 }
        enum AutoSizeType
        { None = 0, Both = 1, Height = 2, Shrink = 3, Ellipsis = 4 }
        class TouchScreenKeyboard extends System.Object implements FairyGUI.IKeyboard
        {
            protected [__keep_incompatibility]: never;
            public get done(): boolean;
            public get supportsCaret(): boolean;
            public GetInput () : string
            public Open ($text: string, $autocorrection: boolean, $multiline: boolean, $secure: boolean, $alert: boolean, $textPlaceholder: string, $keyboardType: number, $hideInput: boolean) : void
            public Close () : void
            public constructor ()
        }
        class TypingEffect extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get totalTimes(): number;
            public Start () : void
            public Print () : boolean
            public Print ($interval: number) : System.Collections.IEnumerator
            public PrintAll ($interval: number) : void
            public Cancel () : void
            public constructor ($textField: FairyGUI.TextField)
            public constructor ($textField: FairyGUI.GTextField)
            public constructor ()
        }
        class GTextField extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear
        {
            protected [__keep_incompatibility]: never;
            public get text(): string;
            public set text(value: string);
            public get templateVars(): System.Collections.Generic.Dictionary$2<string, string>;
            public set templateVars(value: System.Collections.Generic.Dictionary$2<string, string>);
            public get textFormat(): FairyGUI.TextFormat;
            public set textFormat(value: FairyGUI.TextFormat);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            public get singleLine(): boolean;
            public set singleLine(value: boolean);
            public get stroke(): number;
            public set stroke(value: number);
            public get strokeColor(): UnityEngine.Color;
            public set strokeColor(value: UnityEngine.Color);
            public get shadowOffset(): UnityEngine.Vector2;
            public set shadowOffset(value: UnityEngine.Vector2);
            public get UBBEnabled(): boolean;
            public set UBBEnabled(value: boolean);
            public get autoSize(): FairyGUI.AutoSizeType;
            public set autoSize(value: FairyGUI.AutoSizeType);
            public get textWidth(): number;
            public get textHeight(): number;
            public SetVar ($name: string, $value: string) : FairyGUI.GTextField
            public FlushVars () : void
            public HasCharacter ($ch: number) : boolean
            public constructor ()
        }
        interface IColorGear
        {
            color : UnityEngine.Color
        }
        interface ITextColorGear extends FairyGUI.IColorGear
        {
            strokeColor : UnityEngine.Color
            color : UnityEngine.Color
        }
        class EventContext extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public type : string
            public data : any
            public get sender(): FairyGUI.EventDispatcher;
            public get initiator(): any;
            public get inputEvent(): FairyGUI.InputEvent;
            public get isDefaultPrevented(): boolean;
            public StopPropagation () : void
            public PreventDefault () : void
            public CaptureTouch () : void
            public constructor ()
        }
        class InputEvent extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get x(): number;
            public get y(): number;
            public get keyCode(): UnityEngine.KeyCode;
            public get character(): number;
            public get modifiers(): UnityEngine.EventModifiers;
            public get mouseWheelDelta(): number;
            public get touchId(): number;
            public get button(): number;
            public get clickCount(): number;
            public get holdTime(): number;
            public get position(): UnityEngine.Vector2;
            public get isDoubleClick(): boolean;
            public get ctrlOrCmd(): boolean;
            public get ctrl(): boolean;
            public get shift(): boolean;
            public get alt(): boolean;
            public get command(): boolean;
            public constructor ()
        }
        interface EventCallback1
        { 
        (context: FairyGUI.EventContext) : void; 
        Invoke?: (context: FairyGUI.EventContext) => void;
        }
        var EventCallback1: { new (func: (context: FairyGUI.EventContext) => void): EventCallback1; }
        interface EventCallback0
        { 
        () : void; 
        Invoke?: () => void;
        }
        var EventCallback0: { new (func: () => void): EventCallback0; }
        class BlurFilter extends System.Object implements FairyGUI.IFilter
        {
            protected [__keep_incompatibility]: never;
            public blurSize : number
            public get target(): FairyGUI.DisplayObject;
            public set target(value: FairyGUI.DisplayObject);
            public Dispose () : void
            public Update () : void
            public constructor ()
        }
        class ColorFilter extends System.Object implements FairyGUI.IFilter
        {
            protected [__keep_incompatibility]: never;
            public get target(): FairyGUI.DisplayObject;
            public set target(value: FairyGUI.DisplayObject);
            public Dispose () : void
            public Update () : void
            public Invert () : void
            public AdjustSaturation ($sat: number) : void
            public AdjustContrast ($value: number) : void
            public AdjustBrightness ($value: number) : void
            public AdjustHue ($value: number) : void
            public Tint ($color: UnityEngine.Color, $amount?: number) : void
            public Reset () : void
            public ConcatValues (...values: number[]) : void
            public constructor ()
        }
        class LongPressGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public trigger : number
            public interval : number
            public once : boolean
            public holdRangeRadius : number
            public static TRIGGER : number
            public static INTERVAL : number
            public get host(): FairyGUI.GObject;
            public get onBegin(): FairyGUI.EventListener;
            public get onEnd(): FairyGUI.EventListener;
            public get onAction(): FairyGUI.EventListener;
            public Dispose () : void
            public Enable ($value: boolean) : void
            public Cancel () : void
            public constructor ($host: FairyGUI.GObject)
            public constructor ()
        }
        class PinchGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public scale : number
            public delta : number
            public get host(): FairyGUI.GObject;
            public get onBegin(): FairyGUI.EventListener;
            public get onEnd(): FairyGUI.EventListener;
            public get onAction(): FairyGUI.EventListener;
            public Dispose () : void
            public Enable ($value: boolean) : void
            public constructor ($host: FairyGUI.GObject)
            public constructor ()
        }
        class RotationGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public rotation : number
            public delta : number
            public snapping : boolean
            public get host(): FairyGUI.GObject;
            public get onBegin(): FairyGUI.EventListener;
            public get onEnd(): FairyGUI.EventListener;
            public get onAction(): FairyGUI.EventListener;
            public Dispose () : void
            public Enable ($value: boolean) : void
            public constructor ($host: FairyGUI.GObject)
            public constructor ()
        }
        class SwipeGesture extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public velocity : UnityEngine.Vector2
            public position : UnityEngine.Vector2
            public delta : UnityEngine.Vector2
            public actionDistance : number
            public snapping : boolean
            public static ACTION_DISTANCE : number
            public get host(): FairyGUI.GObject;
            public get onBegin(): FairyGUI.EventListener;
            public get onEnd(): FairyGUI.EventListener;
            public get onMove(): FairyGUI.EventListener;
            public get onAction(): FairyGUI.EventListener;
            public Dispose () : void
            public Enable ($value: boolean) : void
            public constructor ($host: FairyGUI.GObject)
            public constructor ()
        }
        class EaseManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static Evaluate ($easeType: FairyGUI.EaseType, $time: number, $duration: number, $overshootOrAmplitude?: number, $period?: number, $customEase?: FairyGUI.CustomEase) : number
        }
        enum EaseType
        { Linear = 0, SineIn = 1, SineOut = 2, SineInOut = 3, QuadIn = 4, QuadOut = 5, QuadInOut = 6, CubicIn = 7, CubicOut = 8, CubicInOut = 9, QuartIn = 10, QuartOut = 11, QuartInOut = 12, QuintIn = 13, QuintOut = 14, QuintInOut = 15, ExpoIn = 16, ExpoOut = 17, ExpoInOut = 18, CircIn = 19, CircOut = 20, CircInOut = 21, ElasticIn = 22, ElasticOut = 23, ElasticInOut = 24, BackIn = 25, BackOut = 26, BackInOut = 27, BounceIn = 28, BounceOut = 29, BounceInOut = 30, Custom = 31 }
        class CustomEase extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public Create ($pathPoints: System.Collections.Generic.IEnumerable$1<FairyGUI.GPathPoint>) : void
            public Evaluate ($time: number) : number
            public constructor ($pointDensity?: number)
            public constructor ()
        }
        class GPathPoint extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public pos : UnityEngine.Vector3
            public control1 : UnityEngine.Vector3
            public control2 : UnityEngine.Vector3
            public curveType : FairyGUI.GPathPoint.CurveType
            public smooth : boolean
            public constructor ($pos: UnityEngine.Vector3)
            public constructor ($pos: UnityEngine.Vector3, $control: UnityEngine.Vector3)
            public constructor ($pos: UnityEngine.Vector3, $control1: UnityEngine.Vector3, $control2: UnityEngine.Vector3)
            public constructor ($pos: UnityEngine.Vector3, $curveType: FairyGUI.GPathPoint.CurveType)
            public constructor ()
        }
        class GTween extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static catchCallbackExceptions : boolean
            public static To ($startValue: number, $endValue: number, $duration: number) : FairyGUI.GTweener
            public static To ($startValue: UnityEngine.Vector2, $endValue: UnityEngine.Vector2, $duration: number) : FairyGUI.GTweener
            public static To ($startValue: UnityEngine.Vector3, $endValue: UnityEngine.Vector3, $duration: number) : FairyGUI.GTweener
            public static To ($startValue: UnityEngine.Vector4, $endValue: UnityEngine.Vector4, $duration: number) : FairyGUI.GTweener
            public static To ($startValue: UnityEngine.Color, $endValue: UnityEngine.Color, $duration: number) : FairyGUI.GTweener
            public static ToDouble ($startValue: number, $endValue: number, $duration: number) : FairyGUI.GTweener
            public static DelayedCall ($delay: number) : FairyGUI.GTweener
            public static Shake ($startValue: UnityEngine.Vector3, $amplitude: number, $duration: number) : FairyGUI.GTweener
            public static IsTweening ($target: any) : boolean
            public static IsTweening ($target: any, $propType: FairyGUI.TweenPropType) : boolean
            public static Kill ($target: any) : void
            public static Kill ($target: any, $complete: boolean) : void
            public static Kill ($target: any, $propType: FairyGUI.TweenPropType, $complete: boolean) : void
            public static GetTween ($target: any) : FairyGUI.GTweener
            public static GetTween ($target: any, $propType: FairyGUI.TweenPropType) : FairyGUI.GTweener
            public static Clean () : void
            public constructor ()
        }
        class GTweener extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get delay(): number;
            public get duration(): number;
            public get repeat(): number;
            public get target(): any;
            public get userData(): any;
            public get startValue(): FairyGUI.TweenValue;
            public get endValue(): FairyGUI.TweenValue;
            public get value(): FairyGUI.TweenValue;
            public get deltaValue(): FairyGUI.TweenValue;
            public get normalizedTime(): number;
            public get completed(): boolean;
            public get allCompleted(): boolean;
            public SetDelay ($value: number) : FairyGUI.GTweener
            public SetDuration ($value: number) : FairyGUI.GTweener
            public SetBreakpoint ($value: number) : FairyGUI.GTweener
            public SetEase ($value: FairyGUI.EaseType) : FairyGUI.GTweener
            public SetEase ($value: FairyGUI.EaseType, $customEase: FairyGUI.CustomEase) : FairyGUI.GTweener
            public SetEasePeriod ($value: number) : FairyGUI.GTweener
            public SetEaseOvershootOrAmplitude ($value: number) : FairyGUI.GTweener
            public SetRepeat ($times: number, $yoyo?: boolean) : FairyGUI.GTweener
            public SetTimeScale ($value: number) : FairyGUI.GTweener
            public SetIgnoreEngineTimeScale ($value: boolean) : FairyGUI.GTweener
            public SetSnapping ($value: boolean) : FairyGUI.GTweener
            public SetPath ($value: FairyGUI.GPath) : FairyGUI.GTweener
            public SetTarget ($value: any) : FairyGUI.GTweener
            public SetTarget ($value: any, $propType: FairyGUI.TweenPropType) : FairyGUI.GTweener
            public SetUserData ($value: any) : FairyGUI.GTweener
            public OnUpdate ($callback: FairyGUI.GTweenCallback) : FairyGUI.GTweener
            public OnStart ($callback: FairyGUI.GTweenCallback) : FairyGUI.GTweener
            public OnComplete ($callback: FairyGUI.GTweenCallback) : FairyGUI.GTweener
            public OnUpdate ($callback: FairyGUI.GTweenCallback1) : FairyGUI.GTweener
            public OnStart ($callback: FairyGUI.GTweenCallback1) : FairyGUI.GTweener
            public OnComplete ($callback: FairyGUI.GTweenCallback1) : FairyGUI.GTweener
            public SetListener ($value: FairyGUI.ITweenListener) : FairyGUI.GTweener
            public SetPaused ($paused: boolean) : FairyGUI.GTweener
            public Seek ($time: number) : void
            public Kill ($complete?: boolean) : void
            public constructor ()
        }
        enum TweenPropType
        { None = 0, X = 1, Y = 2, Z = 3, XY = 4, Position = 5, Width = 6, Height = 7, Size = 8, ScaleX = 9, ScaleY = 10, Scale = 11, Rotation = 12, RotationX = 13, RotationY = 14, Alpha = 15, Progress = 16 }
        interface ITweenListener
        {
            OnTweenStart ($tweener: FairyGUI.GTweener) : void
            OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            OnTweenComplete ($tweener: FairyGUI.GTweener) : void
        }
        interface GTweenCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var GTweenCallback: { new (func: () => void): GTweenCallback; }
        interface GTweenCallback1
        { 
        (tweener: FairyGUI.GTweener) : void; 
        Invoke?: (tweener: FairyGUI.GTweener) => void;
        }
        var GTweenCallback1: { new (func: (tweener: FairyGUI.GTweener) => void): GTweenCallback1; }
        class TweenValue extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public z : number
            public w : number
            public d : number
            public get vec2(): UnityEngine.Vector2;
            public set vec2(value: UnityEngine.Vector2);
            public get vec3(): UnityEngine.Vector3;
            public set vec3(value: UnityEngine.Vector3);
            public get vec4(): UnityEngine.Vector4;
            public set vec4(value: UnityEngine.Vector4);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get_Item ($index: number) : number
            public set_Item ($index: number, $value: number) : void
            public SetZero () : void
            public constructor ()
        }
        class ControllerAction extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public fromPage : System.Array$1<string>
            public toPage : System.Array$1<string>
            public static CreateAction ($type: FairyGUI.ControllerAction.ActionType) : FairyGUI.ControllerAction
            public Run ($controller: FairyGUI.Controller, $prevPage: string, $curPage: string) : void
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer) : void
            public constructor ()
        }
        class ChangePageAction extends FairyGUI.ControllerAction
        {
            protected [__keep_incompatibility]: never;
            public objectId : string
            public controllerName : string
            public targetPage : string
            public constructor ()
        }
        class Controller extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public get onChanged(): FairyGUI.EventListener;
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            public get selectedPage(): string;
            public set selectedPage(value: string);
            public get previsousIndex(): number;
            public get previousPage(): string;
            public get pageCount(): number;
            public Dispose () : void
            public SetSelectedIndex ($value: number) : void
            public SetSelectedPage ($value: string) : void
            public GetPageName ($index: number) : string
            public GetPageId ($index: number) : string
            public GetPageIdByName ($aName: string) : string
            public AddPage ($name: string) : void
            public AddPageAt ($name: string, $index: number) : void
            public RemovePage ($name: string) : void
            public RemovePageAt ($index: number) : void
            public ClearPages () : void
            public HasPage ($aName: string) : boolean
            public RunActions () : void
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer) : void
            public constructor ()
        }
        class PlayTransitionAction extends FairyGUI.ControllerAction
        {
            protected [__keep_incompatibility]: never;
            public transitionName : string
            public playTimes : number
            public delay : number
            public stopOnExit : boolean
            public constructor ()
        }
        class AsyncCreationHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static CreateObject ($item: FairyGUI.PackageItem, $callback: FairyGUI.UIPackage.CreateObjectCallback) : void
            public constructor ()
        }
        class PackageItem extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public owner : FairyGUI.UIPackage
            public type : FairyGUI.PackageItemType
            public objectType : FairyGUI.ObjectType
            public id : string
            public name : string
            public width : number
            public height : number
            public file : string
            public exported : boolean
            public texture : FairyGUI.NTexture
            public rawData : FairyGUI.Utils.ByteBuffer
            public branches : System.Array$1<string>
            public highResolution : System.Array$1<string>
            public scale9Grid : UnityEngine.Rect | null
            public scaleByTile : boolean
            public tileGridIndice : number
            public pixelHitTestData : FairyGUI.PixelHitTestData
            public interval : number
            public repeatDelay : number
            public swing : boolean
            public frames : System.Array$1<FairyGUI.MovieClip.Frame>
            public translated : boolean
            public extensionCreator : FairyGUI.UIObjectFactory.GComponentCreator
            public bitmapFont : FairyGUI.BitmapFont
            public audioClip : FairyGUI.NAudioClip
            public skeletonAnchor : UnityEngine.Vector2
            public skeletonAsset : any
            public Load () : any
            public getBranch () : FairyGUI.PackageItem
            public getHighResolution () : FairyGUI.PackageItem
            public constructor ()
        }
        class DragDropManager extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static get inst(): FairyGUI.DragDropManager;
            public get dragAgent(): FairyGUI.GLoader;
            public get dragging(): boolean;
            public StartDrag ($source: FairyGUI.GObject, $icon: string, $sourceData: any, $touchPointID?: number) : void
            public Cancel () : void
            public constructor ()
        }
        class GLoader extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public showErrorSign : boolean
            public get url(): string;
            public set url(value: string);
            public get icon(): string;
            public set icon(value: string);
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            public get fill(): FairyGUI.FillType;
            public set fill(value: FairyGUI.FillType);
            public get shrinkOnly(): boolean;
            public set shrinkOnly(value: boolean);
            public get autoSize(): boolean;
            public set autoSize(value: boolean);
            public get playing(): boolean;
            public set playing(value: boolean);
            public get frame(): number;
            public set frame(value: number);
            public get timeScale(): number;
            public set timeScale(value: number);
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get shader(): string;
            public set shader(value: string);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            public get fillAmount(): number;
            public set fillAmount(value: number);
            public get image(): FairyGUI.Image;
            public get movieClip(): FairyGUI.MovieClip;
            public get component(): FairyGUI.GComponent;
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            public Advance ($time: number) : void
            public onExternalLoadSuccess ($texture: FairyGUI.NTexture) : void
            public onExternalLoadFailed () : void
            public constructor ()
        }
        interface IAnimationGear
        {
            playing : boolean
            frame : number
            timeScale : number
            ignoreEngineTimeScale : boolean
            Advance ($time: number) : void
        }
        interface EMRenderTarget
        {
            EM_sortingOrder : number
            EM_BeforeUpdate () : void
            EM_Update ($context: FairyGUI.UpdateContext) : void
            EM_Reload () : void
        }
        class EMRenderSupport extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static orderChanged : boolean
            public static get packageListReady(): boolean;
            public static get hasTarget(): boolean;
            public static Add ($value: FairyGUI.EMRenderTarget) : void
            public static Remove ($value: FairyGUI.EMRenderTarget) : void
            public static Update () : void
            public static Reload () : void
            public constructor ()
        }
        class GComponent extends FairyGUI.GObject implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get rootContainer(): FairyGUI.Container;
            public get container(): FairyGUI.Container;
            public get scrollPane(): FairyGUI.ScrollPane;
            public get onDrop(): FairyGUI.EventListener;
            public get fairyBatching(): boolean;
            public set fairyBatching(value: boolean);
            public get opaque(): boolean;
            public set opaque(value: boolean);
            public get margin(): FairyGUI.Margin;
            public set margin(value: FairyGUI.Margin);
            public get childrenRenderOrder(): FairyGUI.ChildrenRenderOrder;
            public set childrenRenderOrder(value: FairyGUI.ChildrenRenderOrder);
            public get apexIndex(): number;
            public set apexIndex(value: number);
            public get tabStopChildren(): boolean;
            public set tabStopChildren(value: boolean);
            public get numChildren(): number;
            public get Controllers(): System.Collections.Generic.List$1<FairyGUI.Controller>;
            public get Transitions(): System.Collections.Generic.List$1<FairyGUI.Transition>;
            public get clipSoftness(): UnityEngine.Vector2;
            public set clipSoftness(value: UnityEngine.Vector2);
            public get mask(): FairyGUI.DisplayObject;
            public set mask(value: FairyGUI.DisplayObject);
            public get reversedMask(): boolean;
            public set reversedMask(value: boolean);
            public get baseUserData(): string;
            public get viewWidth(): number;
            public set viewWidth(value: number);
            public get viewHeight(): number;
            public set viewHeight(value: number);
            public InvalidateBatchingState ($childChanged: boolean) : void
            public AddChild ($child: FairyGUI.GObject) : FairyGUI.GObject
            public AddChildAt ($child: FairyGUI.GObject, $index: number) : FairyGUI.GObject
            public RemoveChild ($child: FairyGUI.GObject) : FairyGUI.GObject
            public RemoveChild ($child: FairyGUI.GObject, $dispose: boolean) : FairyGUI.GObject
            public RemoveChildAt ($index: number) : FairyGUI.GObject
            public RemoveChildAt ($index: number, $dispose: boolean) : FairyGUI.GObject
            public RemoveChildren () : void
            public RemoveChildren ($beginIndex: number, $endIndex: number, $dispose: boolean) : void
            public GetChildAt ($index: number) : FairyGUI.GObject
            public GetChild ($name: string) : FairyGUI.GObject
            public GetChildByPath ($path: string) : FairyGUI.GObject
            public GetVisibleChild ($name: string) : FairyGUI.GObject
            public GetChildInGroup ($group: FairyGUI.GGroup, $name: string) : FairyGUI.GObject
            public GetChildren () : System.Array$1<FairyGUI.GObject>
            public GetChildIndex ($child: FairyGUI.GObject) : number
            public SetChildIndex ($child: FairyGUI.GObject, $index: number) : void
            public SetChildIndexBefore ($child: FairyGUI.GObject, $index: number) : number
            public SwapChildren ($child1: FairyGUI.GObject, $child2: FairyGUI.GObject) : void
            public SwapChildrenAt ($index1: number, $index2: number) : void
            public IsAncestorOf ($obj: FairyGUI.GObject) : boolean
            public ChangeChildrenOrder ($objs: System.Collections.Generic.IList$1<FairyGUI.GObject>) : void
            public AddController ($controller: FairyGUI.Controller) : void
            public GetControllerAt ($index: number) : FairyGUI.Controller
            public GetController ($name: string) : FairyGUI.Controller
            public RemoveController ($c: FairyGUI.Controller) : void
            public GetTransitionAt ($index: number) : FairyGUI.Transition
            public GetTransition ($name: string) : FairyGUI.Transition
            public IsChildInView ($child: FairyGUI.GObject) : boolean
            public GetFirstChildInView () : number
            public SetBoundsChangedFlag () : void
            public EnsureBoundsCorrect () : void
            public GetSnappingPosition ($xValue: $Ref<number>, $yValue: $Ref<number>) : void
            public GetSnappingPositionWithDir ($xValue: $Ref<number>, $yValue: $Ref<number>, $xDir: number, $yDir: number) : void
            public ConstructFromXML ($xml: FairyGUI.Utils.XML) : void
            public constructor ()
            public InvalidateBatchingState () : void
        }
        class GButton extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public sound : FairyGUI.NAudioClip
            public soundVolumeScale : number
            public changeStateOnClick : boolean
            public linkedPopup : FairyGUI.GObject
            public static UP : string
            public static DOWN : string
            public static OVER : string
            public static SELECTED_OVER : string
            public static DISABLED : string
            public static SELECTED_DISABLED : string
            public get onChanged(): FairyGUI.EventListener;
            public get icon(): string;
            public set icon(value: string);
            public get title(): string;
            public set title(value: string);
            public get text(): string;
            public set text(value: string);
            public get selectedIcon(): string;
            public set selectedIcon(value: string);
            public get selectedTitle(): string;
            public set selectedTitle(value: string);
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            public get selected(): boolean;
            public set selected(value: boolean);
            public get mode(): FairyGUI.ButtonMode;
            public set mode(value: FairyGUI.ButtonMode);
            public get relatedController(): FairyGUI.Controller;
            public set relatedController(value: FairyGUI.Controller);
            public get relatedPageId(): string;
            public set relatedPageId(value: string);
            public FireClick ($downEffect: boolean, $clickCall?: boolean) : void
            public GetTextField () : FairyGUI.GTextField
            public constructor ()
        }
        enum ButtonMode
        { Common = 0, Check = 1, Radio = 2 }
        class GComboBox extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public visibleItemCount : number
            public dropdown : FairyGUI.GComponent
            public sound : FairyGUI.NAudioClip
            public soundVolumeScale : number
            public get onChanged(): FairyGUI.EventListener;
            public get icon(): string;
            public set icon(value: string);
            public get title(): string;
            public set title(value: string);
            public get text(): string;
            public set text(value: string);
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            public get items(): System.Array$1<string>;
            public set items(value: System.Array$1<string>);
            public get icons(): System.Array$1<string>;
            public set icons(value: System.Array$1<string>);
            public get values(): System.Array$1<string>;
            public set values(value: System.Array$1<string>);
            public get itemList(): System.Collections.Generic.List$1<string>;
            public get valueList(): System.Collections.Generic.List$1<string>;
            public get iconList(): System.Collections.Generic.List$1<string>;
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            public get value(): string;
            public set value(value: string);
            public get popupDirection(): FairyGUI.PopupDirection;
            public set popupDirection(value: FairyGUI.PopupDirection);
            public ApplyListChange () : void
            public GetTextField () : FairyGUI.GTextField
            public UpdateDropdownList () : void
            public constructor ()
        }
        enum PopupDirection
        { Auto = 0, Up = 1, Down = 2 }
        class ScrollPane extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public static TWEEN_TIME_GO : number
            public static TWEEN_TIME_DEFAULT : number
            public static PULL_RATIO : number
            public static get draggingPane(): FairyGUI.ScrollPane;
            public get onScroll(): FairyGUI.EventListener;
            public get onScrollEnd(): FairyGUI.EventListener;
            public get onPullDownRelease(): FairyGUI.EventListener;
            public get onPullUpRelease(): FairyGUI.EventListener;
            public get owner(): FairyGUI.GComponent;
            public get hzScrollBar(): FairyGUI.GScrollBar;
            public get vtScrollBar(): FairyGUI.GScrollBar;
            public get header(): FairyGUI.GComponent;
            public get footer(): FairyGUI.GComponent;
            public get bouncebackEffect(): boolean;
            public set bouncebackEffect(value: boolean);
            public get touchEffect(): boolean;
            public set touchEffect(value: boolean);
            public get inertiaDisabled(): boolean;
            public set inertiaDisabled(value: boolean);
            public get softnessOnTopOrLeftSide(): boolean;
            public set softnessOnTopOrLeftSide(value: boolean);
            public get scrollStep(): number;
            public set scrollStep(value: number);
            public get snapToItem(): boolean;
            public set snapToItem(value: boolean);
            public get pageMode(): boolean;
            public set pageMode(value: boolean);
            public get pageController(): FairyGUI.Controller;
            public set pageController(value: FairyGUI.Controller);
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            public get decelerationRate(): number;
            public set decelerationRate(value: number);
            public get isDragged(): boolean;
            public get percX(): number;
            public set percX(value: number);
            public get percY(): number;
            public set percY(value: number);
            public get posX(): number;
            public set posX(value: number);
            public get posY(): number;
            public set posY(value: number);
            public get isBottomMost(): boolean;
            public get isRightMost(): boolean;
            public get currentPageX(): number;
            public set currentPageX(value: number);
            public get currentPageY(): number;
            public set currentPageY(value: number);
            public get scrollingPosX(): number;
            public get scrollingPosY(): number;
            public get contentWidth(): number;
            public get contentHeight(): number;
            public get viewWidth(): number;
            public set viewWidth(value: number);
            public get viewHeight(): number;
            public set viewHeight(value: number);
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer) : void
            public Dispose () : void
            public SetPercX ($value: number, $ani: boolean) : void
            public SetPercY ($value: number, $ani: boolean) : void
            public SetPosX ($value: number, $ani: boolean) : void
            public SetPosY ($value: number, $ani: boolean) : void
            public SetCurrentPageX ($value: number, $ani: boolean) : void
            public SetCurrentPageY ($value: number, $ani: boolean) : void
            public ScrollTop () : void
            public ScrollTop ($ani: boolean) : void
            public ScrollBottom () : void
            public ScrollBottom ($ani: boolean) : void
            public ScrollUp () : void
            public ScrollUp ($ratio: number, $ani: boolean) : void
            public ScrollDown () : void
            public ScrollDown ($ratio: number, $ani: boolean) : void
            public ScrollLeft () : void
            public ScrollLeft ($ratio: number, $ani: boolean) : void
            public ScrollRight () : void
            public ScrollRight ($ratio: number, $ani: boolean) : void
            public ScrollToView ($obj: FairyGUI.GObject) : void
            public ScrollToView ($obj: FairyGUI.GObject, $ani: boolean) : void
            public ScrollToView ($obj: FairyGUI.GObject, $ani: boolean, $setFirst: boolean) : void
            public ScrollToView ($rect: UnityEngine.Rect, $ani: boolean, $setFirst: boolean) : void
            public IsChildInView ($obj: FairyGUI.GObject) : boolean
            public CancelDragging () : void
            public LockHeader ($size: number) : void
            public LockFooter ($size: number) : void
            public UpdateScrollBarVisible () : void
            public constructor ($owner: FairyGUI.GComponent)
            public constructor ()
        }
        enum ChildrenRenderOrder
        { Ascent = 0, Descent = 1, Arch = 2 }
        class GGroup extends FairyGUI.GObject implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get layout(): FairyGUI.GroupLayoutType;
            public set layout(value: FairyGUI.GroupLayoutType);
            public get lineGap(): number;
            public set lineGap(value: number);
            public get columnGap(): number;
            public set columnGap(value: number);
            public get excludeInvisibles(): boolean;
            public set excludeInvisibles(value: boolean);
            public get autoSizeDisabled(): boolean;
            public set autoSizeDisabled(value: boolean);
            public get mainGridMinSize(): number;
            public set mainGridMinSize(value: number);
            public get mainGridIndex(): number;
            public set mainGridIndex(value: number);
            public SetBoundsChangedFlag ($positionChangedOnly?: boolean) : void
            public EnsureBoundsCorrect () : void
            public constructor ()
        }
        class Transition extends System.Object implements FairyGUI.ITweenListener
        {
            protected [__keep_incompatibility]: never;
            public invalidateBatchingEveryFrame : boolean
            public get name(): string;
            public get playing(): boolean;
            public get totalDuration(): number;
            public get timeScale(): number;
            public set timeScale(value: number);
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            public Play () : void
            public Play ($onComplete: FairyGUI.PlayCompleteCallback) : void
            public Play ($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback) : void
            public Play ($times: number, $delay: number, $startTime: number, $endTime: number, $onComplete: FairyGUI.PlayCompleteCallback) : void
            public PlayReverse () : void
            public PlayReverse ($onComplete: FairyGUI.PlayCompleteCallback) : void
            public PlayReverse ($times: number, $delay: number, $onComplete: FairyGUI.PlayCompleteCallback) : void
            public ChangePlayTimes ($value: number) : void
            public SetAutoPlay ($autoPlay: boolean, $times: number, $delay: number) : void
            public Stop () : void
            public Stop ($setToComplete: boolean, $processCallback: boolean) : void
            public SetPaused ($paused: boolean) : void
            public Dispose () : void
            public SetValue ($label: string, ...aParams: any[]) : void
            public SetHook ($label: string, $callback: FairyGUI.TransitionHook) : void
            public ClearHooks () : void
            public SetTarget ($label: string, $newTarget: FairyGUI.GObject) : void
            public SetDuration ($label: string, $value: number) : void
            public GetLabelTime ($label: string) : number
            public OnTweenStart ($tweener: FairyGUI.GTweener) : void
            public OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            public OnTweenComplete ($tweener: FairyGUI.GTweener) : void
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer) : void
            public constructor ($owner: FairyGUI.GComponent)
            public constructor ()
        }
        class GearBase extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static disableAllTweenEffect : boolean
            public get controller(): FairyGUI.Controller;
            public set controller(value: FairyGUI.Controller);
            public get tweenConfig(): FairyGUI.GearTweenConfig;
            public Dispose () : void
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer) : void
            public UpdateFromRelations ($dx: number, $dy: number) : void
            public Apply () : void
            public UpdateState () : void
        }
        class GearAnimation extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public AddExtStatus ($pageId: string, $buffer: FairyGUI.Utils.ByteBuffer) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearTweenConfig extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public tween : boolean
            public easeType : FairyGUI.EaseType
            public customEase : FairyGUI.CustomEase
            public duration : number
            public delay : number
            public constructor ()
        }
        class GearColor extends FairyGUI.GearBase implements FairyGUI.ITweenListener
        {
            protected [__keep_incompatibility]: never;
            public OnTweenStart ($tweener: FairyGUI.GTweener) : void
            public OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            public OnTweenComplete ($tweener: FairyGUI.GTweener) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearDisplay extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public get pages(): System.Array$1<string>;
            public set pages(value: System.Array$1<string>);
            public get connected(): boolean;
            public AddLock () : number
            public ReleaseLock ($token: number) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearDisplay2 extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public condition : number
            public get pages(): System.Array$1<string>;
            public set pages(value: System.Array$1<string>);
            public Evaluate ($connected: boolean) : boolean
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearFontSize extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearIcon extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearLook extends FairyGUI.GearBase implements FairyGUI.ITweenListener
        {
            protected [__keep_incompatibility]: never;
            public OnTweenStart ($tweener: FairyGUI.GTweener) : void
            public OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            public OnTweenComplete ($tweener: FairyGUI.GTweener) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearSize extends FairyGUI.GearBase implements FairyGUI.ITweenListener
        {
            protected [__keep_incompatibility]: never;
            public OnTweenStart ($tweener: FairyGUI.GTweener) : void
            public OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            public OnTweenComplete ($tweener: FairyGUI.GTweener) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearText extends FairyGUI.GearBase
        {
            protected [__keep_incompatibility]: never;
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GearXY extends FairyGUI.GearBase implements FairyGUI.ITweenListener
        {
            protected [__keep_incompatibility]: never;
            public positionsInPercent : boolean
            public AddExtStatus ($pageId: string, $buffer: FairyGUI.Utils.ByteBuffer) : void
            public OnTweenStart ($tweener: FairyGUI.GTweener) : void
            public OnTweenUpdate ($tweener: FairyGUI.GTweener) : void
            public OnTweenComplete ($tweener: FairyGUI.GTweener) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        class GGraph extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get shape(): FairyGUI.Shape;
            public ReplaceMe ($target: FairyGUI.GObject) : void
            public AddBeforeMe ($target: FairyGUI.GObject) : void
            public AddAfterMe ($target: FairyGUI.GObject) : void
            public SetNativeObject ($obj: FairyGUI.DisplayObject) : void
            public DrawRect ($aWidth: number, $aHeight: number, $lineSize: number, $lineColor: UnityEngine.Color, $fillColor: UnityEngine.Color) : void
            public DrawRoundRect ($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color, $corner: System.Array$1<number>) : void
            public DrawEllipse ($aWidth: number, $aHeight: number, $fillColor: UnityEngine.Color) : void
            public DrawPolygon ($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color) : void
            public DrawPolygon ($aWidth: number, $aHeight: number, $points: System.Collections.Generic.IList$1<UnityEngine.Vector2>, $fillColor: UnityEngine.Color, $lineSize: number, $lineColor: UnityEngine.Color) : void
            public constructor ()
        }
        enum GroupLayoutType
        { None = 0, Horizontal = 1, Vertical = 2 }
        class GImage extends FairyGUI.GObject implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            public get fillMethod(): FairyGUI.FillMethod;
            public set fillMethod(value: FairyGUI.FillMethod);
            public get fillOrigin(): number;
            public set fillOrigin(value: number);
            public get fillClockwise(): boolean;
            public set fillClockwise(value: boolean);
            public get fillAmount(): number;
            public set fillAmount(value: number);
            public get texture(): FairyGUI.NTexture;
            public set texture(value: FairyGUI.NTexture);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get shader(): string;
            public set shader(value: string);
            public constructor ()
        }
        class GLabel extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public get icon(): string;
            public set icon(value: string);
            public get title(): string;
            public set title(value: string);
            public get text(): string;
            public set text(value: string);
            public get editable(): boolean;
            public set editable(value: boolean);
            public get titleColor(): UnityEngine.Color;
            public set titleColor(value: UnityEngine.Color);
            public get titleFontSize(): number;
            public set titleFontSize(value: number);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public GetTextField () : FairyGUI.GTextField
            public constructor ()
        }
        class GList extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public foldInvisibleItems : boolean
            public selectionMode : FairyGUI.ListSelectionMode
            public itemRenderer : FairyGUI.ListItemRenderer
            public itemProvider : FairyGUI.ListItemProvider
            public scrollItemToViewOnClick : boolean
            public get onClickItem(): FairyGUI.EventListener;
            public get onRightClickItem(): FairyGUI.EventListener;
            public get defaultItem(): string;
            public set defaultItem(value: string);
            public get layout(): FairyGUI.ListLayoutType;
            public set layout(value: FairyGUI.ListLayoutType);
            public get lineCount(): number;
            public set lineCount(value: number);
            public get columnCount(): number;
            public set columnCount(value: number);
            public get lineGap(): number;
            public set lineGap(value: number);
            public get columnGap(): number;
            public set columnGap(value: number);
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            public get autoResizeItem(): boolean;
            public set autoResizeItem(value: boolean);
            public get defaultItemSize(): UnityEngine.Vector2;
            public set defaultItemSize(value: UnityEngine.Vector2);
            public get itemPool(): FairyGUI.GObjectPool;
            public get selectedIndex(): number;
            public set selectedIndex(value: number);
            public get selectionController(): FairyGUI.Controller;
            public set selectionController(value: FairyGUI.Controller);
            public get touchItem(): FairyGUI.GObject;
            public get isVirtual(): boolean;
            public get numItems(): number;
            public set numItems(value: number);
            public GetFromPool ($url: string) : FairyGUI.GObject
            public AddItemFromPool () : FairyGUI.GObject
            public AddItemFromPool ($url: string) : FairyGUI.GObject
            public RemoveChildToPoolAt ($index: number) : void
            public RemoveChildToPool ($child: FairyGUI.GObject) : void
            public RemoveChildrenToPool () : void
            public RemoveChildrenToPool ($beginIndex: number, $endIndex: number) : void
            public GetSelection () : System.Collections.Generic.List$1<number>
            public GetSelection ($result: System.Collections.Generic.List$1<number>) : System.Collections.Generic.List$1<number>
            public AddSelection ($index: number, $scrollItToView: boolean) : void
            public RemoveSelection ($index: number) : void
            public ClearSelection () : void
            public SelectAll () : void
            public SelectNone () : void
            public SelectReverse () : void
            public EnableSelectionFocusEvents ($enabled: boolean) : void
            public EnableArrowKeyNavigation ($enabled: boolean) : void
            public HandleArrowKey ($dir: number) : number
            public ResizeToFit () : void
            public ResizeToFit ($itemCount: number) : void
            public ResizeToFit ($itemCount: number, $minSize: number) : void
            public ScrollToView ($index: number) : void
            public ScrollToView ($index: number, $ani: boolean) : void
            public ScrollToView ($index: number, $ani: boolean, $setFirst: boolean) : void
            public ChildIndexToItemIndex ($index: number) : number
            public ItemIndexToChildIndex ($index: number) : number
            public SetVirtual () : void
            public SetVirtualAndLoop () : void
            public RefreshVirtualList () : void
            public constructor ()
        }
        enum ListSelectionMode
        { Single = 0, Multiple = 1, Multiple_SingleClick = 2, None = 3 }
        interface ListItemRenderer
        { 
        (index: number, item: FairyGUI.GObject) : void; 
        Invoke?: (index: number, item: FairyGUI.GObject) => void;
        }
        var ListItemRenderer: { new (func: (index: number, item: FairyGUI.GObject) => void): ListItemRenderer; }
        interface ListItemProvider
        { 
        (index: number) : string; 
        Invoke?: (index: number) => string;
        }
        var ListItemProvider: { new (func: (index: number) => string): ListItemProvider; }
        enum ListLayoutType
        { SingleColumn = 0, SingleRow = 1, FlowHorizontal = 2, FlowVertical = 3, Pagination = 4 }
        class GObjectPool extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public initCallback : FairyGUI.GObjectPool.InitCallbackDelegate
            public get count(): number;
            public Clear () : void
            public GetObject ($url: string) : FairyGUI.GObject
            public ReturnObject ($obj: FairyGUI.GObject) : void
            public constructor ($manager: UnityEngine.Transform)
            public constructor ()
        }
        enum FillType
        { None = 0, Scale = 1, ScaleMatchHeight = 2, ScaleMatchWidth = 3, ScaleFree = 4, ScaleNoBorder = 5 }
        class GLoader3D extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public get url(): string;
            public set url(value: string);
            public get icon(): string;
            public set icon(value: string);
            public get align(): FairyGUI.AlignType;
            public set align(value: FairyGUI.AlignType);
            public get verticalAlign(): FairyGUI.VertAlignType;
            public set verticalAlign(value: FairyGUI.VertAlignType);
            public get fill(): FairyGUI.FillType;
            public set fill(value: FairyGUI.FillType);
            public get shrinkOnly(): boolean;
            public set shrinkOnly(value: boolean);
            public get autoSize(): boolean;
            public set autoSize(value: boolean);
            public get playing(): boolean;
            public set playing(value: boolean);
            public get frame(): number;
            public set frame(value: number);
            public get timeScale(): number;
            public set timeScale(value: number);
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            public get loop(): boolean;
            public set loop(value: boolean);
            public get animationName(): string;
            public set animationName(value: string);
            public get skinName(): string;
            public set skinName(value: string);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get shader(): string;
            public set shader(value: string);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get wrapTarget(): UnityEngine.GameObject;
            public get filter(): FairyGUI.IFilter;
            public set filter(value: FairyGUI.IFilter);
            public get blendMode(): FairyGUI.BlendMode;
            public set blendMode(value: FairyGUI.BlendMode);
            public Advance ($time: number) : void
            public SetWrapTarget ($gameObject: UnityEngine.GameObject, $cloneMaterial: boolean, $width: number, $height: number) : void
            public constructor ()
        }
        class GMovieClip extends FairyGUI.GObject implements FairyGUI.IAnimationGear, FairyGUI.IEventDispatcher, FairyGUI.IColorGear
        {
            protected [__keep_incompatibility]: never;
            public get onPlayEnd(): FairyGUI.EventListener;
            public get playing(): boolean;
            public set playing(value: boolean);
            public get frame(): number;
            public set frame(value: number);
            public get color(): UnityEngine.Color;
            public set color(value: UnityEngine.Color);
            public get flip(): FairyGUI.FlipType;
            public set flip(value: FairyGUI.FlipType);
            public get material(): UnityEngine.Material;
            public set material(value: UnityEngine.Material);
            public get shader(): string;
            public set shader(value: string);
            public get timeScale(): number;
            public set timeScale(value: number);
            public get ignoreEngineTimeScale(): boolean;
            public set ignoreEngineTimeScale(value: boolean);
            public Rewind () : void
            public SyncStatus ($anotherMc: FairyGUI.GMovieClip) : void
            public Advance ($time: number) : void
            public SetPlaySettings ($start: number, $end: number, $times: number, $endAt: number) : void
            public constructor ()
        }
        class Relations extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public handling : FairyGUI.GObject
            public get isEmpty(): boolean;
            public Add ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType) : void
            public Add ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType, $usePercent: boolean) : void
            public Remove ($target: FairyGUI.GObject, $relationType: FairyGUI.RelationType) : void
            public Contains ($target: FairyGUI.GObject) : boolean
            public ClearFor ($target: FairyGUI.GObject) : void
            public ClearAll () : void
            public CopyFrom ($source: FairyGUI.Relations) : void
            public Dispose () : void
            public OnOwnerSizeChanged ($dWidth: number, $dHeight: number, $applyPivot: boolean) : void
            public Setup ($buffer: FairyGUI.Utils.ByteBuffer, $parentToChild: boolean) : void
            public constructor ($owner: FairyGUI.GObject)
            public constructor ()
        }
        enum RelationType
        { Left_Left = 0, Left_Center = 1, Left_Right = 2, Center_Center = 3, Right_Left = 4, Right_Center = 5, Right_Right = 6, Top_Top = 7, Top_Middle = 8, Top_Bottom = 9, Middle_Middle = 10, Bottom_Top = 11, Bottom_Middle = 12, Bottom_Bottom = 13, Width = 14, Height = 15, LeftExt_Left = 16, LeftExt_Right = 17, RightExt_Left = 18, RightExt_Right = 19, TopExt_Top = 20, TopExt_Bottom = 21, BottomExt_Top = 22, BottomExt_Bottom = 23, Size = 24 }
        class GRoot extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public static get contentScaleFactor(): number;
            public static get contentScaleLevel(): number;
            public static get inst(): FairyGUI.GRoot;
            public get modalLayer(): FairyGUI.GGraph;
            public get hasModalWindow(): boolean;
            public get modalWaiting(): boolean;
            public get touchTarget(): FairyGUI.GObject;
            public get hasAnyPopup(): boolean;
            public get focus(): FairyGUI.GObject;
            public set focus(value: FairyGUI.GObject);
            public get soundVolume(): number;
            public set soundVolume(value: number);
            public SetContentScaleFactor ($designResolutionX: number, $designResolutionY: number) : void
            public SetContentScaleFactor ($designResolutionX: number, $designResolutionY: number, $screenMatchMode: FairyGUI.UIContentScaler.ScreenMatchMode) : void
            public SetContentScaleFactor ($constantScaleFactor: number) : void
            public ApplyContentScaleFactor () : void
            public ShowWindow ($win: FairyGUI.Window) : void
            public HideWindow ($win: FairyGUI.Window) : void
            public HideWindowImmediately ($win: FairyGUI.Window) : void
            public HideWindowImmediately ($win: FairyGUI.Window, $dispose: boolean) : void
            public BringToFront ($win: FairyGUI.Window) : void
            public ShowModalWait () : void
            public CloseModalWait () : void
            public CloseAllExceptModals () : void
            public CloseAllWindows () : void
            public GetTopWindow () : FairyGUI.Window
            public DisplayObjectToGObject ($obj: FairyGUI.DisplayObject) : FairyGUI.GObject
            public ShowPopup ($popup: FairyGUI.GObject) : void
            public ShowPopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject) : void
            public ShowPopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection) : void
            public ShowPopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean) : void
            public GetPoupPosition ($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection) : UnityEngine.Vector2
            public TogglePopup ($popup: FairyGUI.GObject) : void
            public TogglePopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject) : void
            public TogglePopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection) : void
            public TogglePopup ($popup: FairyGUI.GObject, $target: FairyGUI.GObject, $dir: FairyGUI.PopupDirection, $closeUntilUpEvent: boolean) : void
            public HidePopup () : void
            public HidePopup ($popup: FairyGUI.GObject) : void
            public ShowTooltips ($msg: string) : void
            public ShowTooltips ($msg: string, $delay: number) : void
            public ShowTooltipsWin ($tooltipWin: FairyGUI.GObject) : void
            public ShowTooltipsWin ($tooltipWin: FairyGUI.GObject, $delay: number) : void
            public HideTooltips () : void
            public EnableSound () : void
            public DisableSound () : void
            public PlayOneShotSound ($clip: UnityEngine.AudioClip, $volumeScale: number) : void
            public PlayOneShotSound ($clip: UnityEngine.AudioClip) : void
            public constructor ()
        }
        class GProgressBar extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            public get min(): number;
            public set min(value: number);
            public get max(): number;
            public set max(value: number);
            public get value(): number;
            public set value(value: number);
            public get reverse(): boolean;
            public set reverse(value: boolean);
            public TweenValue ($value: number, $duration: number) : FairyGUI.GTweener
            public Update ($newValue: number) : void
            public constructor ()
        }
        class GSlider extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public changeOnClick : boolean
            public canDrag : boolean
            public get onChanged(): FairyGUI.EventListener;
            public get onGripTouchEnd(): FairyGUI.EventListener;
            public get titleType(): FairyGUI.ProgressTitleType;
            public set titleType(value: FairyGUI.ProgressTitleType);
            public get min(): number;
            public set min(value: number);
            public get max(): number;
            public set max(value: number);
            public get value(): number;
            public set value(value: number);
            public get wholeNumbers(): boolean;
            public set wholeNumbers(value: boolean);
            public constructor ()
        }
        class GRichTextField extends FairyGUI.GTextField implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear
        {
            protected [__keep_incompatibility]: never;
            public get richTextField(): FairyGUI.RichTextField;
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            public constructor ()
        }
        class GTextInput extends FairyGUI.GTextField implements FairyGUI.IEventDispatcher, FairyGUI.IColorGear, FairyGUI.ITextColorGear
        {
            protected [__keep_incompatibility]: never;
            public get inputTextField(): FairyGUI.InputTextField;
            public get onChanged(): FairyGUI.EventListener;
            public get onSubmit(): FairyGUI.EventListener;
            public get editable(): boolean;
            public set editable(value: boolean);
            public get hideInput(): boolean;
            public set hideInput(value: boolean);
            public get maxLength(): number;
            public set maxLength(value: number);
            public get restrict(): string;
            public set restrict(value: string);
            public get displayAsPassword(): boolean;
            public set displayAsPassword(value: boolean);
            public get caretPosition(): number;
            public set caretPosition(value: number);
            public get promptText(): string;
            public set promptText(value: string);
            public get keyboardInput(): boolean;
            public set keyboardInput(value: boolean);
            public get keyboardType(): number;
            public set keyboardType(value: number);
            public get disableIME(): boolean;
            public set disableIME(value: boolean);
            public get emojies(): System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>;
            public set emojies(value: System.Collections.Generic.Dictionary$2<number, FairyGUI.Emoji>);
            public get border(): number;
            public set border(value: number);
            public get corner(): number;
            public set corner(value: number);
            public get borderColor(): UnityEngine.Color;
            public set borderColor(value: UnityEngine.Color);
            public get backgroundColor(): UnityEngine.Color;
            public set backgroundColor(value: UnityEngine.Color);
            public get mouseWheelEnabled(): boolean;
            public set mouseWheelEnabled(value: boolean);
            public SetSelection ($start: number, $length: number) : void
            public ReplaceSelection ($value: string) : void
            public constructor ()
        }
        class GTree extends FairyGUI.GList implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public treeNodeRender : FairyGUI.GTree.TreeNodeRenderDelegate
            public treeNodeWillExpand : FairyGUI.GTree.TreeNodeWillExpandDelegate
            public get rootNode(): FairyGUI.GTreeNode;
            public get indent(): number;
            public set indent(value: number);
            public get clickToExpand(): number;
            public set clickToExpand(value: number);
            public GetSelectedNode () : FairyGUI.GTreeNode
            public GetSelectedNodes () : System.Collections.Generic.List$1<FairyGUI.GTreeNode>
            public GetSelectedNodes ($result: System.Collections.Generic.List$1<FairyGUI.GTreeNode>) : System.Collections.Generic.List$1<FairyGUI.GTreeNode>
            public SelectNode ($node: FairyGUI.GTreeNode) : void
            public SelectNode ($node: FairyGUI.GTreeNode, $scrollItToView: boolean) : void
            public UnselectNode ($node: FairyGUI.GTreeNode) : void
            public ExpandAll () : void
            public ExpandAll ($folderNode: FairyGUI.GTreeNode) : void
            public CollapseAll () : void
            public CollapseAll ($folderNode: FairyGUI.GTreeNode) : void
            public constructor ()
        }
        class GTreeNode extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public data : any
            public get parent(): FairyGUI.GTreeNode;
            public get tree(): FairyGUI.GTree;
            public get cell(): FairyGUI.GComponent;
            public get level(): number;
            public get expanded(): boolean;
            public set expanded(value: boolean);
            public get isFolder(): boolean;
            public get text(): string;
            public set text(value: string);
            public get icon(): string;
            public set icon(value: string);
            public get numChildren(): number;
            public ExpandToRoot () : void
            public AddChild ($child: FairyGUI.GTreeNode) : FairyGUI.GTreeNode
            public AddChildAt ($child: FairyGUI.GTreeNode, $index: number) : FairyGUI.GTreeNode
            public RemoveChild ($child: FairyGUI.GTreeNode) : FairyGUI.GTreeNode
            public RemoveChildAt ($index: number) : FairyGUI.GTreeNode
            public RemoveChildren ($beginIndex?: number, $endIndex?: number) : void
            public GetChildAt ($index: number) : FairyGUI.GTreeNode
            public GetChildIndex ($child: FairyGUI.GTreeNode) : number
            public GetPrevSibling () : FairyGUI.GTreeNode
            public GetNextSibling () : FairyGUI.GTreeNode
            public SetChildIndex ($child: FairyGUI.GTreeNode, $index: number) : void
            public SwapChildren ($child1: FairyGUI.GTreeNode, $child2: FairyGUI.GTreeNode) : void
            public SwapChildrenAt ($index1: number, $index2: number) : void
            public constructor ($hasChild: boolean)
            public constructor ($hasChild: boolean, $resURL: string)
            public constructor ()
        }
        enum ProgressTitleType
        { Percent = 0, ValueAndMax = 1, Value = 2, Max = 3 }
        class Window extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public bringToFontOnClick : boolean
            public get contentPane(): FairyGUI.GComponent;
            public set contentPane(value: FairyGUI.GComponent);
            public get frame(): FairyGUI.GComponent;
            public get closeButton(): FairyGUI.GObject;
            public set closeButton(value: FairyGUI.GObject);
            public get dragArea(): FairyGUI.GObject;
            public set dragArea(value: FairyGUI.GObject);
            public get contentArea(): FairyGUI.GObject;
            public set contentArea(value: FairyGUI.GObject);
            public get modalWaitingPane(): FairyGUI.GObject;
            public get isShowing(): boolean;
            public get isTop(): boolean;
            public get modal(): boolean;
            public set modal(value: boolean);
            public get modalWaiting(): boolean;
            public AddUISource ($source: FairyGUI.IUISource) : void
            public Show () : void
            public ShowOn ($r: FairyGUI.GRoot) : void
            public Hide () : void
            public HideImmediately () : void
            public CenterOn ($r: FairyGUI.GRoot, $restraint: boolean) : void
            public ToggleStatus () : void
            public BringToFront () : void
            public ShowModalWait () : void
            public ShowModalWait ($requestingCmd: number) : void
            public CloseModalWait () : boolean
            public CloseModalWait ($requestingCmd: number) : boolean
            public Init () : void
            public constructor ()
        }
        class GScrollBar extends FairyGUI.GComponent implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public get minSize(): number;
            public get gripDragging(): boolean;
            public SetScrollPane ($target: FairyGUI.ScrollPane, $vertical: boolean) : void
            public SetDisplayPerc ($value: number) : void
            public setScrollPerc ($value: number) : void
            public constructor ()
        }
        interface IUISource
        {
            fileName : string
            loaded : boolean
            Load ($callback: FairyGUI.UILoadCallback) : void
            Cancel () : void
        }
        interface UILoadCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var UILoadCallback: { new (func: () => void): UILoadCallback; }
        class UIPackage extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static unloadBundleByFGUI : boolean
            public static URL_PREFIX : string
            public get id(): string;
            public get name(): string;
            public static get branch(): string;
            public static set branch(value: string);
            public get assetPath(): string;
            public get customId(): string;
            public set customId(value: string);
            public get resBundle(): UnityEngine.AssetBundle;
            public get dependencies(): System.Array$1<System.Collections.Generic.Dictionary$2<string, string>>;
            public static add_onReleaseResource ($value: System.Action$1<FairyGUI.PackageItem>) : void
            public static remove_onReleaseResource ($value: System.Action$1<FairyGUI.PackageItem>) : void
            public static GetVar ($key: string) : string
            public static SetVar ($key: string, $value: string) : void
            public static GetById ($id: string) : FairyGUI.UIPackage
            public static GetByName ($name: string) : FairyGUI.UIPackage
            public static AddPackage ($bundle: UnityEngine.AssetBundle) : FairyGUI.UIPackage
            public static AddPackage ($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle) : FairyGUI.UIPackage
            public static AddPackage ($desc: UnityEngine.AssetBundle, $res: UnityEngine.AssetBundle, $mainAssetName: string) : FairyGUI.UIPackage
            public static AddPackage ($descFilePath: string) : FairyGUI.UIPackage
            public static AddPackage ($assetPath: string, $loadFunc: FairyGUI.UIPackage.LoadResource) : FairyGUI.UIPackage
            public static AddPackage ($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResource) : FairyGUI.UIPackage
            public static AddPackage ($descData: System.Array$1<number>, $assetNamePrefix: string, $loadFunc: FairyGUI.UIPackage.LoadResourceAsync) : FairyGUI.UIPackage
            public static RemovePackage ($packageIdOrName: string) : void
            public static RemoveAllPackages () : void
            public static GetPackages () : System.Collections.Generic.List$1<FairyGUI.UIPackage>
            public static CreateObject ($pkgName: string, $resName: string) : FairyGUI.GObject
            public static CreateObject ($pkgName: string, $resName: string, $userClass: System.Type) : FairyGUI.GObject
            public static CreateObjectFromURL ($url: string) : FairyGUI.GObject
            public static CreateObjectFromURL ($url: string, $userClass: System.Type) : FairyGUI.GObject
            public static CreateObjectAsync ($pkgName: string, $resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback) : void
            public static CreateObjectFromURL ($url: string, $callback: FairyGUI.UIPackage.CreateObjectCallback) : void
            public static GetItemAsset ($pkgName: string, $resName: string) : any
            public static GetItemAssetByURL ($url: string) : any
            public static GetItemURL ($pkgName: string, $resName: string) : string
            public static GetItemByURL ($url: string) : FairyGUI.PackageItem
            public static NormalizeURL ($url: string) : string
            public static SetStringsSource ($source: FairyGUI.Utils.XML) : void
            public LoadAllAssets () : void
            public UnloadAssets () : void
            public ReloadAssets () : void
            public ReloadAssets ($resBundle: UnityEngine.AssetBundle) : void
            public CreateObject ($resName: string) : FairyGUI.GObject
            public CreateObject ($resName: string, $userClass: System.Type) : FairyGUI.GObject
            public CreateObjectAsync ($resName: string, $callback: FairyGUI.UIPackage.CreateObjectCallback) : void
            public GetItemAsset ($resName: string) : any
            public GetItems () : System.Collections.Generic.List$1<FairyGUI.PackageItem>
            public GetItem ($itemId: string) : FairyGUI.PackageItem
            public GetItemByName ($itemName: string) : FairyGUI.PackageItem
            public GetItemAsset ($item: FairyGUI.PackageItem) : any
            public SetItemAsset ($item: FairyGUI.PackageItem, $asset: any, $destroyMethod: FairyGUI.DestroyMethod) : void
            public constructor ()
        }
        enum PackageItemType
        { Image = 0, MovieClip = 1, Sound = 2, Component = 3, Atlas = 4, Font = 5, Swf = 6, Misc = 7, Unknown = 8, Spine = 9, DragoneBones = 10 }
        enum ObjectType
        { Image = 0, MovieClip = 1, Swf = 2, Graph = 3, Loader = 4, Group = 5, Text = 6, RichText = 7, InputText = 8, Component = 9, List = 10, Label = 11, Button = 12, ComboBox = 13, ProgressBar = 14, Slider = 15, ScrollBar = 16, Tree = 17, Loader3D = 18 }
        interface PlayCompleteCallback
        { 
        () : void; 
        Invoke?: () => void;
        }
        var PlayCompleteCallback: { new (func: () => void): PlayCompleteCallback; }
        interface TransitionHook
        { 
        () : void; 
        Invoke?: () => void;
        }
        var TransitionHook: { new (func: () => void): TransitionHook; }
        class TranslationHelper extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static strings : System.Collections.Generic.Dictionary$2<string, System.Collections.Generic.Dictionary$2<string, string>>
            public static LoadFromXML ($source: FairyGUI.Utils.XML) : void
            public static TranslateComponent ($item: FairyGUI.PackageItem) : void
            public constructor ()
        }
        class TreeNode extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public data : any
            public get parent(): FairyGUI.TreeNode;
            public get tree(): FairyGUI.TreeView;
            public get cell(): FairyGUI.GComponent;
            public get level(): number;
            public get expanded(): boolean;
            public set expanded(value: boolean);
            public get isFolder(): boolean;
            public get text(): string;
            public get numChildren(): number;
            public AddChild ($child: FairyGUI.TreeNode) : FairyGUI.TreeNode
            public AddChildAt ($child: FairyGUI.TreeNode, $index: number) : FairyGUI.TreeNode
            public RemoveChild ($child: FairyGUI.TreeNode) : FairyGUI.TreeNode
            public RemoveChildAt ($index: number) : FairyGUI.TreeNode
            public RemoveChildren ($beginIndex?: number, $endIndex?: number) : void
            public GetChildAt ($index: number) : FairyGUI.TreeNode
            public GetChildIndex ($child: FairyGUI.TreeNode) : number
            public GetPrevSibling () : FairyGUI.TreeNode
            public GetNextSibling () : FairyGUI.TreeNode
            public SetChildIndex ($child: FairyGUI.TreeNode, $index: number) : void
            public SwapChildren ($child1: FairyGUI.TreeNode, $child2: FairyGUI.TreeNode) : void
            public SwapChildrenAt ($index1: number, $index2: number) : void
            public constructor ($hasChild: boolean)
            public constructor ()
        }
        class TreeView extends FairyGUI.EventDispatcher implements FairyGUI.IEventDispatcher
        {
            protected [__keep_incompatibility]: never;
            public indent : number
            public treeNodeCreateCell : FairyGUI.TreeView.TreeNodeCreateCellDelegate
            public treeNodeRender : FairyGUI.TreeView.TreeNodeRenderDelegate
            public treeNodeWillExpand : FairyGUI.TreeView.TreeNodeWillExpandDelegate
            public get list(): FairyGUI.GList;
            public get root(): FairyGUI.TreeNode;
            public get onClickNode(): FairyGUI.EventListener;
            public get onRightClickNode(): FairyGUI.EventListener;
            public GetSelectedNode () : FairyGUI.TreeNode
            public GetSelection () : System.Collections.Generic.List$1<FairyGUI.TreeNode>
            public AddSelection ($node: FairyGUI.TreeNode, $scrollItToView?: boolean) : void
            public RemoveSelection ($node: FairyGUI.TreeNode) : void
            public ClearSelection () : void
            public GetNodeIndex ($node: FairyGUI.TreeNode) : number
            public UpdateNode ($node: FairyGUI.TreeNode) : void
            public UpdateNodes ($nodes: System.Collections.Generic.List$1<FairyGUI.TreeNode>) : void
            public ExpandAll ($folderNode: FairyGUI.TreeNode) : void
            public CollapseAll ($folderNode: FairyGUI.TreeNode) : void
            public constructor ($list: FairyGUI.GList)
            public constructor ()
        }
        class UIConfig extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public static defaultFont : string
            public static windowModalWaiting : string
            public static globalModalWaiting : string
            public static modalLayerColor : UnityEngine.Color
            public static buttonSound : FairyGUI.NAudioClip
            public static buttonSoundVolumeScale : number
            public static horizontalScrollBar : string
            public static verticalScrollBar : string
            public static defaultScrollStep : number
            public static defaultScrollDecelerationRate : number
            public static defaultScrollBarDisplay : FairyGUI.ScrollBarDisplayType
            public static defaultScrollTouchEffect : boolean
            public static defaultScrollBounceEffect : boolean
            public static defaultScrollSnappingThreshold : number
            public static defaultScrollPagingThreshold : number
            public static popupMenu : string
            public static popupMenu_seperator : string
            public static loaderErrorSign : string
            public static tooltipsWin : string
            public static defaultComboBoxVisibleItemCount : number
            public static touchScrollSensitivity : number
            public static touchDragSensitivity : number
            public static clickDragSensitivity : number
            public static allowSoftnessOnTopOrLeftSide : boolean
            public static bringWindowToFrontOnClick : boolean
            public static inputCaretSize : number
            public static inputHighlightColor : UnityEngine.Color
            public static frameTimeForAsyncUIConstruction : number
            public static depthSupportForPaintingMode : boolean
            public static enhancedTextOutlineEffect : boolean
            public static makePixelPerfect : boolean
            public Items : System.Collections.Generic.List$1<FairyGUI.UIConfig.ConfigValue>
            public PreloadPackages : System.Collections.Generic.List$1<string>
            public static soundLoader : FairyGUI.UIConfig.SoundLoader
            public Load () : void
            public static SetDefaultValue ($key: FairyGUI.UIConfig.ConfigKey, $value: FairyGUI.UIConfig.ConfigValue) : void
            public static ClearResourceRefs () : void
            public ApplyModifiedProperties () : void
            public constructor ()
        }
        enum ScrollBarDisplayType
        { Default = 0, Visible = 1, Auto = 2, Hidden = 3 }
        class UIContentScaler extends UnityEngine.MonoBehaviour
        {
            protected [__keep_incompatibility]: never;
            public scaleMode : FairyGUI.UIContentScaler.ScaleMode
            public screenMatchMode : FairyGUI.UIContentScaler.ScreenMatchMode
            public designResolutionX : number
            public designResolutionY : number
            public fallbackScreenDPI : number
            public defaultSpriteDPI : number
            public constantScaleFactor : number
            public ignoreOrientation : boolean
            public static scaleFactor : number
            public static scaleLevel : number
            public ApplyModifiedProperties () : void
            public ApplyChange () : void
            public constructor ()
        }
        class UIObjectFactory extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static SetPackageItemExtension ($url: string, $type: System.Type) : void
            public static SetPackageItemExtension ($url: string, $creator: FairyGUI.UIObjectFactory.GComponentCreator) : void
            public static SetLoaderExtension ($type: System.Type) : void
            public static SetLoaderExtension ($creator: FairyGUI.UIObjectFactory.GLoaderCreator) : void
            public static Clear () : void
            public static NewObject ($pi: FairyGUI.PackageItem, $userClass?: System.Type) : FairyGUI.GObject
            public static NewObject ($type: FairyGUI.ObjectType) : FairyGUI.GObject
            public constructor ()
        }
        class UIPainter extends UnityEngine.MonoBehaviour implements FairyGUI.EMRenderTarget
        {
            protected [__keep_incompatibility]: never;
            public packageName : string
            public componentName : string
            public sortingOrder : number
            public get container(): FairyGUI.Container;
            public get ui(): FairyGUI.GComponent;
            public get EM_sortingOrder(): number;
            public SetSortingOrder ($value: number, $apply: boolean) : void
            public CreateUI () : void
            public ApplyModifiedProperties ($sortingOrderChanged: boolean) : void
            public OnUpdateSource ($data: System.Array$1<any>) : void
            public EM_BeforeUpdate () : void
            public EM_Update ($context: FairyGUI.UpdateContext) : void
            public EM_Reload () : void
            public constructor ()
        }
        class UIPanel extends UnityEngine.MonoBehaviour implements FairyGUI.EMRenderTarget
        {
            protected [__keep_incompatibility]: never;
            public packageName : string
            public componentName : string
            public fitScreen : FairyGUI.FitScreen
            public sortingOrder : number
            public get container(): FairyGUI.Container;
            public get ui(): FairyGUI.GComponent;
            public get EM_sortingOrder(): number;
            public CreateUI () : void
            public SetSortingOrder ($value: number, $apply: boolean) : void
            public SetHitTestMode ($value: FairyGUI.HitTestMode) : void
            public CacheNativeChildrenRenderers () : void
            public ApplyModifiedProperties ($sortingOrderChanged: boolean, $fitScreenChanged: boolean) : void
            public MoveUI ($delta: UnityEngine.Vector3) : void
            public GetUIWorldPosition () : UnityEngine.Vector3
            public EM_BeforeUpdate () : void
            public EM_Update ($context: FairyGUI.UpdateContext) : void
            public EM_Reload () : void
            public constructor ()
        }
        enum FitScreen
        { None = 0, FitSize = 1, FitWidthAndSetMiddle = 2, FitHeightAndSetCenter = 3 }
        enum HitTestMode
        { Default = 0, Raycast = 1 }
        class Timers extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static repeat : number
            public static time : number
            public static catchCallbackExceptions : boolean
            public static get inst(): FairyGUI.Timers;
            public Add ($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback) : void
            public Add ($interval: number, $repeat: number, $callback: FairyGUI.TimerCallback, $callbackParam: any) : void
            public CallLater ($callback: FairyGUI.TimerCallback) : void
            public CallLater ($callback: FairyGUI.TimerCallback, $callbackParam: any) : void
            public AddUpdate ($callback: FairyGUI.TimerCallback) : void
            public AddUpdate ($callback: FairyGUI.TimerCallback, $callbackParam: any) : void
            public StartCoroutine ($routine: System.Collections.IEnumerator) : void
            public Exists ($callback: FairyGUI.TimerCallback) : boolean
            public Remove ($callback: FairyGUI.TimerCallback) : void
            public Update () : void
            public constructor ()
        }
        interface TimerCallback
        { 
        (param: any) : void; 
        Invoke?: (param: any) => void;
        }
        var TimerCallback: { new (func: (param: any) => void): TimerCallback; }
    }
    namespace FairyGUI.BlendModeUtils {
        class BlendFactor extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public srcFactor : UnityEngine.Rendering.BlendMode
            public dstFactor : UnityEngine.Rendering.BlendMode
            public pma : boolean
            public constructor ($srcFactor: UnityEngine.Rendering.BlendMode, $dstFactor: UnityEngine.Rendering.BlendMode, $pma?: boolean)
            public constructor ()
        }
    }
    namespace UnityEngine.Rendering {
        /** Blend mode for controlling the blending.
        */
        enum BlendMode
        { Zero = 0, One = 1, DstColor = 2, SrcColor = 3, OneMinusDstColor = 4, SrcAlpha = 5, OneMinusSrcColor = 6, DstAlpha = 7, OneMinusDstAlpha = 8, SrcAlphaSaturate = 9, OneMinusSrcAlpha = 10 }
    }
    namespace FairyGUI.Utils {
        class ByteBuffer extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public littleEndian : boolean
            public stringTable : System.Array$1<string>
            public version : number
            public get position(): number;
            public set position(value: number);
            public get length(): number;
            public get bytesAvailable(): boolean;
            public get buffer(): System.Array$1<number>;
            public set buffer(value: System.Array$1<number>);
            public Skip ($count: number) : number
            public ReadByte () : number
            public ReadBytes ($output: System.Array$1<number>, $destIndex: number, $count: number) : System.Array$1<number>
            public ReadBytes ($count: number) : System.Array$1<number>
            public ReadBuffer () : FairyGUI.Utils.ByteBuffer
            public ReadChar () : number
            public ReadBool () : boolean
            public ReadShort () : number
            public ReadUshort () : number
            public ReadInt () : number
            public ReadUint () : number
            public ReadFloat () : number
            public ReadLong () : bigint
            public ReadDouble () : number
            public ReadString () : string
            public ReadString ($len: number) : string
            public ReadS () : string
            public ReadSArray ($cnt: number) : System.Array$1<string>
            public ReadPath () : System.Collections.Generic.List$1<FairyGUI.GPathPoint>
            public WriteS ($value: string) : void
            public ReadColor () : UnityEngine.Color
            public Seek ($indexTablePos: number, $blockIndex: number) : boolean
            public constructor ($data: System.Array$1<number>, $offset?: number, $length?: number)
            public constructor ()
        }
        interface IHtmlPageContext
        {
            CreateObject ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : FairyGUI.Utils.IHtmlObject
            FreeObject ($obj: FairyGUI.Utils.IHtmlObject) : void
            GetImageTexture ($image: FairyGUI.Utils.HtmlImage) : FairyGUI.NTexture
            FreeImageTexture ($image: FairyGUI.Utils.HtmlImage, $texture: FairyGUI.NTexture) : void
        }
        class HtmlParseOptions extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public linkUnderline : boolean
            public linkColor : UnityEngine.Color
            public linkBgColor : UnityEngine.Color
            public linkHoverBgColor : UnityEngine.Color
            public ignoreWhiteSpace : boolean
            public static DefaultLinkUnderline : boolean
            public static DefaultLinkColor : UnityEngine.Color
            public static DefaultLinkBgColor : UnityEngine.Color
            public static DefaultLinkHoverBgColor : UnityEngine.Color
            public constructor ()
        }
        class HtmlElement extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public type : FairyGUI.Utils.HtmlElementType
            public name : string
            public text : string
            public format : FairyGUI.TextFormat
            public charIndex : number
            public htmlObject : FairyGUI.Utils.IHtmlObject
            public status : number
            public space : number
            public position : UnityEngine.Vector2
            public get isEntity(): boolean;
            public Get ($attrName: string) : any
            public Set ($attrName: string, $attrValue: any) : void
            public GetString ($attrName: string) : string
            public GetString ($attrName: string, $defValue: string) : string
            public GetInt ($attrName: string) : number
            public GetInt ($attrName: string, $defValue: number) : number
            public GetFloat ($attrName: string) : number
            public GetFloat ($attrName: string, $defValue: number) : number
            public GetBool ($attrName: string) : boolean
            public GetBool ($attrName: string, $defValue: boolean) : boolean
            public GetColor ($attrName: string, $defValue: UnityEngine.Color) : UnityEngine.Color
            public FetchAttributes () : void
            public static GetElement ($type: FairyGUI.Utils.HtmlElementType) : FairyGUI.Utils.HtmlElement
            public static ReturnElement ($element: FairyGUI.Utils.HtmlElement) : void
            public static ReturnElements ($elements: System.Collections.Generic.List$1<FairyGUI.Utils.HtmlElement>) : void
            public constructor ()
        }
        class XML extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public text : string
            public get attributes(): System.Collections.Generic.Dictionary$2<string, string>;
            public get elements(): FairyGUI.Utils.XMLList;
            public static Create ($tag: string) : FairyGUI.Utils.XML
            public HasAttribute ($attrName: string) : boolean
            public GetAttribute ($attrName: string) : string
            public GetAttribute ($attrName: string, $defValue: string) : string
            public GetAttributeInt ($attrName: string) : number
            public GetAttributeInt ($attrName: string, $defValue: number) : number
            public GetAttributeFloat ($attrName: string) : number
            public GetAttributeFloat ($attrName: string, $defValue: number) : number
            public GetAttributeBool ($attrName: string) : boolean
            public GetAttributeBool ($attrName: string, $defValue: boolean) : boolean
            public GetAttributeArray ($attrName: string) : System.Array$1<string>
            public GetAttributeArray ($attrName: string, $seperator: number) : System.Array$1<string>
            public GetAttributeColor ($attrName: string, $defValue: UnityEngine.Color) : UnityEngine.Color
            public GetAttributeVector ($attrName: string) : UnityEngine.Vector2
            public SetAttribute ($attrName: string, $attrValue: string) : void
            public SetAttribute ($attrName: string, $attrValue: boolean) : void
            public SetAttribute ($attrName: string, $attrValue: number) : void
            public RemoveAttribute ($attrName: string) : void
            public GetNode ($selector: string) : FairyGUI.Utils.XML
            public Elements () : FairyGUI.Utils.XMLList
            public Elements ($selector: string) : FairyGUI.Utils.XMLList
            public GetEnumerator () : FairyGUI.Utils.XMLList.Enumerator
            public GetEnumerator ($selector: string) : FairyGUI.Utils.XMLList.Enumerator
            public AppendChild ($child: FairyGUI.Utils.XML) : void
            public RemoveChild ($child: FairyGUI.Utils.XML) : void
            public RemoveChildren ($selector: string) : void
            public Parse ($aSource: string) : void
            public Reset () : void
            public ToXMLString ($includeHeader: boolean) : string
            public constructor ($XmlString: string)
            public constructor ()
        }
        class HtmlButton extends System.Object implements FairyGUI.Utils.IHtmlObject
        {
            protected [__keep_incompatibility]: never;
            public static CLICK_EVENT : string
            public static resource : string
            public get button(): FairyGUI.GComponent;
            public get displayObject(): FairyGUI.DisplayObject;
            public get element(): FairyGUI.Utils.HtmlElement;
            public get width(): number;
            public get height(): number;
            public Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            public SetPosition ($x: number, $y: number) : void
            public Add () : void
            public Remove () : void
            public Release () : void
            public Dispose () : void
            public constructor ()
        }
        interface IHtmlObject
        {
            width : number
            height : number
            displayObject : FairyGUI.DisplayObject
            element : FairyGUI.Utils.HtmlElement
            Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            SetPosition ($x: number, $y: number) : void
            Add () : void
            Remove () : void
            Release () : void
            Dispose () : void
        }
        enum HtmlElementType
        { Text = 0, Link = 1, Image = 2, Input = 3, Select = 4, Object = 5, LinkEnd = 6 }
        class HtmlImage extends System.Object implements FairyGUI.Utils.IHtmlObject
        {
            protected [__keep_incompatibility]: never;
            public get loader(): FairyGUI.GLoader;
            public get displayObject(): FairyGUI.DisplayObject;
            public get element(): FairyGUI.Utils.HtmlElement;
            public get width(): number;
            public get height(): number;
            public Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            public SetPosition ($x: number, $y: number) : void
            public Add () : void
            public Remove () : void
            public Release () : void
            public Dispose () : void
            public constructor ()
        }
        class HtmlInput extends System.Object implements FairyGUI.Utils.IHtmlObject
        {
            protected [__keep_incompatibility]: never;
            public static defaultBorderSize : number
            public static defaultBorderColor : UnityEngine.Color
            public static defaultBackgroundColor : UnityEngine.Color
            public get textInput(): FairyGUI.GTextInput;
            public get displayObject(): FairyGUI.DisplayObject;
            public get element(): FairyGUI.Utils.HtmlElement;
            public get width(): number;
            public get height(): number;
            public Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            public SetPosition ($x: number, $y: number) : void
            public Add () : void
            public Remove () : void
            public Release () : void
            public Dispose () : void
            public constructor ()
        }
        class HtmlLink extends System.Object implements FairyGUI.Utils.IHtmlObject
        {
            protected [__keep_incompatibility]: never;
            public get displayObject(): FairyGUI.DisplayObject;
            public get element(): FairyGUI.Utils.HtmlElement;
            public get width(): number;
            public get height(): number;
            public Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            public SetArea ($startLine: number, $startCharX: number, $endLine: number, $endCharX: number) : void
            public SetPosition ($x: number, $y: number) : void
            public Add () : void
            public Remove () : void
            public Release () : void
            public Dispose () : void
            public constructor ()
        }
        class HtmlPageContext extends System.Object implements FairyGUI.Utils.IHtmlPageContext
        {
            protected [__keep_incompatibility]: never;
            public static inst : FairyGUI.Utils.HtmlPageContext
            public CreateObject ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : FairyGUI.Utils.IHtmlObject
            public FreeObject ($obj: FairyGUI.Utils.IHtmlObject) : void
            public GetImageTexture ($image: FairyGUI.Utils.HtmlImage) : FairyGUI.NTexture
            public FreeImageTexture ($image: FairyGUI.Utils.HtmlImage, $texture: FairyGUI.NTexture) : void
            public constructor ()
        }
        class HtmlParser extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static inst : FairyGUI.Utils.HtmlParser
            public Parse ($aSource: string, $defaultFormat: FairyGUI.TextFormat, $elements: System.Collections.Generic.List$1<FairyGUI.Utils.HtmlElement>, $parseOptions: FairyGUI.Utils.HtmlParseOptions) : void
            public constructor ()
        }
        class HtmlSelect extends System.Object implements FairyGUI.Utils.IHtmlObject
        {
            protected [__keep_incompatibility]: never;
            public static CHANGED_EVENT : string
            public static resource : string
            public get comboBox(): FairyGUI.GComboBox;
            public get displayObject(): FairyGUI.DisplayObject;
            public get element(): FairyGUI.Utils.HtmlElement;
            public get width(): number;
            public get height(): number;
            public Create ($owner: FairyGUI.RichTextField, $element: FairyGUI.Utils.HtmlElement) : void
            public SetPosition ($x: number, $y: number) : void
            public Add () : void
            public Remove () : void
            public Release () : void
            public Dispose () : void
            public constructor ()
        }
        class ToolSet extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static ConvertFromHtmlColor ($str: string) : UnityEngine.Color
            public static ColorFromRGB ($value: number) : UnityEngine.Color
            public static ColorFromRGBA ($value: number) : UnityEngine.Color
            public static CharToHex ($c: number) : number
            public static Intersection ($rect1: $Ref<UnityEngine.Rect>, $rect2: $Ref<UnityEngine.Rect>) : UnityEngine.Rect
            public static Union ($rect1: $Ref<UnityEngine.Rect>, $rect2: $Ref<UnityEngine.Rect>) : UnityEngine.Rect
            public static SkewMatrix ($matrix: $Ref<UnityEngine.Matrix4x4>, $skewX: number, $skewY: number) : void
            public static RotateUV ($uv: System.Array$1<UnityEngine.Vector2>, $baseUVRect: $Ref<UnityEngine.Rect>) : void
        }
        class UBBParser extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static inst : FairyGUI.Utils.UBBParser
            public defaultTagHandler : FairyGUI.Utils.UBBParser.TagHandler
            public handlers : System.Collections.Generic.Dictionary$2<string, FairyGUI.Utils.UBBParser.TagHandler>
            public defaultImgWidth : number
            public defaultImgHeight : number
            public GetTagText ($remove: boolean) : string
            public Parse ($text: string) : string
            public constructor ()
        }
        class XMLList extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public rawList : System.Collections.Generic.List$1<FairyGUI.Utils.XML>
            public get Count(): number;
            public Add ($xml: FairyGUI.Utils.XML) : void
            public Clear () : void
            public get_Item ($index: number) : FairyGUI.Utils.XML
            public GetEnumerator () : FairyGUI.Utils.XMLList.Enumerator
            public GetEnumerator ($selector: string) : FairyGUI.Utils.XMLList.Enumerator
            public Filter ($selector: string) : FairyGUI.Utils.XMLList
            public Find ($selector: string) : FairyGUI.Utils.XML
            public RemoveAll ($selector: string) : void
            public constructor ()
            public constructor ($list: System.Collections.Generic.List$1<FairyGUI.Utils.XML>)
        }
        class XMLIterator extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static tagName : string
            public static tagType : FairyGUI.Utils.XMLTagType
            public static lastTagName : string
            public static Begin ($source: string, $lowerCaseName?: boolean) : void
            public static NextTag () : boolean
            public static GetTagSource () : string
            public static GetRawText ($trim?: boolean) : string
            public static GetText ($trim?: boolean) : string
            public static HasAttribute ($attrName: string) : boolean
            public static GetAttribute ($attrName: string) : string
            public static GetAttribute ($attrName: string, $defValue: string) : string
            public static GetAttributeInt ($attrName: string) : number
            public static GetAttributeInt ($attrName: string, $defValue: number) : number
            public static GetAttributeFloat ($attrName: string) : number
            public static GetAttributeFloat ($attrName: string, $defValue: number) : number
            public static GetAttributeBool ($attrName: string) : boolean
            public static GetAttributeBool ($attrName: string, $defValue: boolean) : boolean
            public static GetAttributes ($result: System.Collections.Generic.Dictionary$2<string, string>) : System.Collections.Generic.Dictionary$2<string, string>
            public static GetAttributes ($result: System.Collections.Hashtable) : System.Collections.Hashtable
            public constructor ()
        }
        enum XMLTagType
        { Start = 0, End = 1, Void = 2, CDATA = 3, Comment = 4, Instruction = 5 }
        class XMLUtils extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public static DecodeString ($aSource: string) : string
            public static EncodeString ($sb: System.Text.StringBuilder, $start: number, $isAttribute?: boolean) : void
            public static EncodeString ($str: string, $isAttribute?: boolean) : string
            public constructor ()
        }
        class ZipReader extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public get entryCount(): number;
            public GetNextEntry ($entry: FairyGUI.Utils.ZipReader.ZipEntry) : boolean
            public GetEntryData ($entry: FairyGUI.Utils.ZipReader.ZipEntry) : System.Array$1<number>
            public constructor ($data: System.Array$1<number>)
            public constructor ()
        }
    }
    namespace FairyGUI.MovieClip {
        class Frame extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public texture : FairyGUI.NTexture
            public addDelay : number
            public constructor ()
        }
    }
    namespace FairyGUI.NGraphics {
        class VertexMatrix extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public cameraPos : UnityEngine.Vector3
            public matrix : UnityEngine.Matrix4x4
            public constructor ()
        }
    }
    namespace FairyGUI.ShaderConfig {
        interface GetFunction
        { 
        (name: string) : UnityEngine.Shader; 
        Invoke?: (name: string) => UnityEngine.Shader;
        }
        var GetFunction: { new (func: (name: string) => UnityEngine.Shader): GetFunction; }
    }
    namespace FairyGUI.BitmapFont {
        class BMGlyph extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public x : number
            public y : number
            public width : number
            public height : number
            public advance : number
            public lineHeight : number
            public uv : System.Array$1<UnityEngine.Vector2>
            public channel : number
            public constructor ()
        }
    }
    namespace FairyGUI.RTLSupport {
        enum DirectionType
        { UNKNOW = 0, LTR = 1, RTL = 2, NEUTRAL = 3 }
    }
    namespace FairyGUI.TextField {
        class LineInfo extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public width : number
            public height : number
            public baseline : number
            public charIndex : number
            public charCount : number
            public y : number
            public static Borrow () : FairyGUI.TextField.LineInfo
            public static Return ($value: FairyGUI.TextField.LineInfo) : void
            public static Return ($values: System.Collections.Generic.List$1<FairyGUI.TextField.LineInfo>) : void
            public constructor ()
        }
        class CharPosition extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public charIndex : number
            public lineIndex : number
            public offsetX : number
            public vertCount : number
            public width : number
            public imgIndex : number
        }
        class LineCharInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public width : number
            public height : number
            public baseline : number
        }
    }
    namespace FairyGUI.TextFormat {
        enum SpecialStyle
        { None = 0, Superscript = 1, Subscript = 2 }
    }
    namespace FairyGUI.UpdateContext {
        class ClipInfo extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public rect : UnityEngine.Rect
            public clipBox : UnityEngine.Vector4
            public soft : boolean
            public softness : UnityEngine.Vector4
            public clipId : number
            public rectMaskDepth : number
            public referenceValue : number
            public reversed : boolean
        }
    }
    namespace FairyGUI.GPathPoint {
        enum CurveType
        { CRSpline = 0, Bezier = 1, CubicBezier = 2, Straight = 3 }
    }
    namespace FairyGUI.ControllerAction {
        enum ActionType
        { PlayTransition = 0, ChangePage = 1 }
    }
    namespace FairyGUI.UIPackage {
        interface CreateObjectCallback
        { 
        (result: FairyGUI.GObject) : void; 
        Invoke?: (result: FairyGUI.GObject) => void;
        }
        var CreateObjectCallback: { new (func: (result: FairyGUI.GObject) => void): CreateObjectCallback; }
        interface LoadResource
        { 
        (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) : any; 
        Invoke?: (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any;
        }
        var LoadResource: { new (func: (name: string, extension: string, type: System.Type, destroyMethod: $Ref<FairyGUI.DestroyMethod>) => any): LoadResource; }
        interface LoadResourceAsync
        { 
        (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) : void; 
        Invoke?: (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void;
        }
        var LoadResourceAsync: { new (func: (name: string, extension: string, type: System.Type, item: FairyGUI.PackageItem) => void): LoadResourceAsync; }
    }
    namespace FairyGUI.GObjectPool {
        interface InitCallbackDelegate
        { 
        (obj: FairyGUI.GObject) : void; 
        Invoke?: (obj: FairyGUI.GObject) => void;
        }
        var InitCallbackDelegate: { new (func: (obj: FairyGUI.GObject) => void): InitCallbackDelegate; }
    }
    namespace FairyGUI.UIContentScaler {
        enum ScreenMatchMode
        { MatchWidthOrHeight = 0, MatchWidth = 1, MatchHeight = 2 }
        enum ScaleMode
        { ConstantPixelSize = 0, ScaleWithScreenSize = 1, ConstantPhysicalSize = 2 }
    }
    namespace FairyGUI.GTree {
        interface TreeNodeRenderDelegate
        { 
        (node: FairyGUI.GTreeNode, obj: FairyGUI.GComponent) : void; 
        Invoke?: (node: FairyGUI.GTreeNode, obj: FairyGUI.GComponent) => void;
        }
        var TreeNodeRenderDelegate: { new (func: (node: FairyGUI.GTreeNode, obj: FairyGUI.GComponent) => void): TreeNodeRenderDelegate; }
        interface TreeNodeWillExpandDelegate
        { 
        (node: FairyGUI.GTreeNode, expand: boolean) : void; 
        Invoke?: (node: FairyGUI.GTreeNode, expand: boolean) => void;
        }
        var TreeNodeWillExpandDelegate: { new (func: (node: FairyGUI.GTreeNode, expand: boolean) => void): TreeNodeWillExpandDelegate; }
    }
    namespace FairyGUI.UIObjectFactory {
        interface GComponentCreator
        { 
        () : FairyGUI.GComponent; 
        Invoke?: () => FairyGUI.GComponent;
        }
        var GComponentCreator: { new (func: () => FairyGUI.GComponent): GComponentCreator; }
        interface GLoaderCreator
        { 
        () : FairyGUI.GLoader; 
        Invoke?: () => FairyGUI.GLoader;
        }
        var GLoaderCreator: { new (func: () => FairyGUI.GLoader): GLoaderCreator; }
    }
    namespace FairyGUI.TreeView {
        interface TreeNodeCreateCellDelegate
        { 
        (node: FairyGUI.TreeNode) : FairyGUI.GComponent; 
        Invoke?: (node: FairyGUI.TreeNode) => FairyGUI.GComponent;
        }
        var TreeNodeCreateCellDelegate: { new (func: (node: FairyGUI.TreeNode) => FairyGUI.GComponent): TreeNodeCreateCellDelegate; }
        interface TreeNodeRenderDelegate
        { 
        (node: FairyGUI.TreeNode) : void; 
        Invoke?: (node: FairyGUI.TreeNode) => void;
        }
        var TreeNodeRenderDelegate: { new (func: (node: FairyGUI.TreeNode) => void): TreeNodeRenderDelegate; }
        interface TreeNodeWillExpandDelegate
        { 
        (node: FairyGUI.TreeNode, expand: boolean) : void; 
        Invoke?: (node: FairyGUI.TreeNode, expand: boolean) => void;
        }
        var TreeNodeWillExpandDelegate: { new (func: (node: FairyGUI.TreeNode, expand: boolean) => void): TreeNodeWillExpandDelegate; }
    }
    namespace FairyGUI.UIConfig {
        class ConfigValue extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public valid : boolean
            public s : string
            public i : number
            public f : number
            public b : boolean
            public c : UnityEngine.Color
            public Reset () : void
            public constructor ()
        }
        interface SoundLoader
        { 
        (url: string) : FairyGUI.NAudioClip; 
        Invoke?: (url: string) => FairyGUI.NAudioClip;
        }
        var SoundLoader: { new (func: (url: string) => FairyGUI.NAudioClip): SoundLoader; }
        enum ConfigKey
        { DefaultFont = 0, ButtonSound = 1, ButtonSoundVolumeScale = 2, HorizontalScrollBar = 3, VerticalScrollBar = 4, DefaultScrollStep = 5, DefaultScrollBarDisplay = 6, DefaultScrollTouchEffect = 7, DefaultScrollBounceEffect = 8, TouchScrollSensitivity = 9, WindowModalWaiting = 10, GlobalModalWaiting = 11, PopupMenu = 12, PopupMenu_seperator = 13, LoaderErrorSign = 14, TooltipsWin = 15, DefaultComboBoxVisibleItemCount = 16, TouchDragSensitivity = 17, ClickDragSensitivity = 18, ModalLayerColor = 19, RenderingTextBrighterOnDesktop = 20, AllowSoftnessOnTopOrLeftSide = 21, InputCaretSize = 22, InputHighlightColor = 23, EnhancedTextOutlineEffect = 24, DepthSupportForPaintingMode = 25, RichTextRowVerticalAlign = 26, Branch = 27, PleaseSelect = 100 }
    }
    namespace FairyGUI.Utils.UBBParser {
        interface TagHandler
        { 
        (tagName: string, end: boolean, attr: string) : string; 
        Invoke?: (tagName: string, end: boolean, attr: string) => string;
        }
        var TagHandler: { new (func: (tagName: string, end: boolean, attr: string) => string): TagHandler; }
    }
    namespace FairyGUI.Utils.XMLList {
        class Enumerator extends System.ValueType
        {
            protected [__keep_incompatibility]: never;
            public get Current(): FairyGUI.Utils.XML;
            public MoveNext () : boolean
            public Erase () : void
            public Reset () : void
            public constructor ($source: System.Collections.Generic.List$1<FairyGUI.Utils.XML>, $selector: string)
            public constructor ()
        }
    }
    namespace System.Text {
        class StringBuilder extends System.Object implements System.Runtime.Serialization.ISerializable
        {
            protected [__keep_incompatibility]: never;
        }
    }
    namespace FairyGUI.Utils.ZipReader {
        class ZipEntry extends System.Object
        {
            protected [__keep_incompatibility]: never;
            public name : string
            public compress : number
            public crc : number
            public size : number
            public sourceSize : number
            public offset : number
            public isDirectory : boolean
            public constructor ()
        }
    }
}
declare module 'csharp' {
export = CS;
}
