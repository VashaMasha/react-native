/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

'use strict';

export type CommandsFunctionTypeAnnotation = $ReadOnly<{|
  type: 'FunctionTypeAnnotation',
  params: $ReadOnlyArray<CommandsFunctionTypeParamAnnotation>,
|}>;

export type CommandsFunctionTypeParamAnnotation = $ReadOnly<{|
  name: string,
  typeAnnotation: CommandsTypeAnnotation,
|}>;

export type CommandsTypeAnnotation =
  | BooleanTypeAnnotation
  | Int32TypeAnnotation;

export type BooleanTypeAnnotation = $ReadOnly<{|
  type: 'BooleanTypeAnnotation',
|}>;

export type Int32TypeAnnotation = $ReadOnly<{|
  type: 'Int32TypeAnnotation',
|}>;

export type ObjectPropertyType =
  | $ReadOnly<{|
      type: 'BooleanTypeAnnotation',
      name: string,
      optional: boolean,
    |}>
  | $ReadOnly<{|
      type: 'StringTypeAnnotation',
      name: string,
      optional: boolean,
    |}>
  | $ReadOnly<{|
      type: 'FloatTypeAnnotation',
      name: string,
      optional: boolean,
    |}>
  | $ReadOnly<{|
      type: 'Int32TypeAnnotation',
      name: string,
      optional: boolean,
    |}>
  | $ReadOnly<{|
      type: 'StringEnumTypeAnnotation',
      name: string,
      optional: boolean,
      options: $ReadOnlyArray<{|
        name: string,
      |}>,
    |}>
  | $ReadOnly<{|
      type: 'ObjectTypeAnnotation',
      name: string,
      optional: boolean,
      properties: $ReadOnlyArray<ObjectPropertyType>,
    |}>;

type PropTypeTypeAnnotation =
  | $ReadOnly<{|
      type: 'BooleanTypeAnnotation',
      default: boolean,
    |}>
  | $ReadOnly<{|
      type: 'StringTypeAnnotation',
      default: string | null,
    |}>
  | $ReadOnly<{|
      type: 'FloatTypeAnnotation',
      default: number,
    |}>
  | $ReadOnly<{|
      type: 'Int32TypeAnnotation',
      default: number,
    |}>
  | $ReadOnly<{|
      type: 'StringEnumTypeAnnotation',
      default: string,
      options: $ReadOnlyArray<{|
        name: string,
      |}>,
    |}>
  | $ReadOnly<{|
      type: 'NativePrimitiveTypeAnnotation',
      name: 'ColorPrimitive' | 'ImageSourcePrimitive' | 'PointPrimitive',
    |}>
  | $ReadOnly<{|
      type: 'ArrayTypeAnnotation',
      elementType:
        | $ReadOnly<{|
            type: 'BooleanTypeAnnotation',
          |}>
        | $ReadOnly<{|
            type: 'StringTypeAnnotation',
          |}>
        | $ReadOnly<{|
            type: 'FloatTypeAnnotation',
          |}>
        | $ReadOnly<{|
            type: 'Int32TypeAnnotation',
          |}>
        | $ReadOnly<{|
            type: 'StringEnumTypeAnnotation',
            default: string,
            options: $ReadOnlyArray<{|
              name: string,
            |}>,
          |}>
        | $ReadOnly<{|
            type: 'NativePrimitiveTypeAnnotation',
            name: 'ColorPrimitive' | 'ImageSourcePrimitive' | 'PointPrimitive',
          |}>,
    |}>;

export type PropTypeShape = $ReadOnly<{|
  name: string,
  optional: boolean,
  typeAnnotation: PropTypeTypeAnnotation,
|}>;

export type FunctionTypeAnnotationParamTypeAnnotation = $ReadOnly<{|
  type:
    | 'StringTypeAnnotation'
    | 'NumberTypeAnnotation'
    | 'BooleanTypeAnnotation',
|}>;

export type FunctionTypeAnnotationReturn = $ReadOnly<{|
  type:
    | 'StringTypeAnnotation'
    | 'NumberTypeAnnotation'
    | 'BooleanTypeAnnotation'
    | 'VoidTypeAnnotation',
|}>;

export type FunctionTypeAnnotationParam = $ReadOnly<{|
  name: string,
  typeAnnotation: FunctionTypeAnnotationParamTypeAnnotation,
|}>;

export type FunctionTypeAnnotation = $ReadOnly<{|
  type: 'FunctionTypeAnnotation',
  params: $ReadOnlyArray<FunctionTypeAnnotationParam>,
  returnTypeAnnotation: FunctionTypeAnnotationReturn,
|}>;

export type MethodTypeShape = $ReadOnly<{|
  name: string,
  typeAnnotation: FunctionTypeAnnotation,
|}>;

export type NativeModuleShape = $ReadOnly<{|
  properties: $ReadOnlyArray<MethodTypeShape>,
|}>;

export type EventTypeShape = $ReadOnly<{|
  name: string,
  bubblingType: 'direct' | 'bubble',
  optional: boolean,
  paperTopLevelNameDeprecated?: string,
  typeAnnotation: $ReadOnly<{|
    type: 'EventTypeAnnotation',
    argument?: $ReadOnly<{|
      type: 'ObjectTypeAnnotation',
      properties: $ReadOnlyArray<ObjectPropertyType>,
    |}>,
  |}>,
|}>;

export type CommandTypeShape = $ReadOnly<{|
  name: string,
  optional: boolean,
  typeAnnotation: CommandsFunctionTypeAnnotation,
|}>;

export type OptionsShape = $ReadOnly<{|
  interfaceOnly?: boolean,

  // Use for components with no current paper rename in progress
  // Does not check for new name
  paperComponentName?: string,

  // Use for components currently being renamed in paper
  // Will use new name if it is available and fallback to this name
  paperComponentNameDeprecated?: string,
|}>;

export type ExtendsPropsShape = $ReadOnly<{|
  type: 'ReactNativeBuiltInType',
  knownTypeName: 'ReactNativeCoreViewProps',
|}>;

export type ComponentShape = $ReadOnly<{|
  ...OptionsShape,
  extendsProps: $ReadOnlyArray<ExtendsPropsShape>,
  events: $ReadOnlyArray<EventTypeShape>,
  props: $ReadOnlyArray<PropTypeShape>,
  commands: $ReadOnlyArray<CommandTypeShape>,
|}>;

export type SchemaType = $ReadOnly<{|
  modules: $ReadOnly<{
    [module: string]: $ReadOnly<{|
      components?: $ReadOnly<{
        [component: string]: ComponentShape,
      }>,
      nativeModules?: $ReadOnly<{
        [nativeModule: string]: NativeModuleShape,
      }>,
    |}>,
  }>,
|}>;